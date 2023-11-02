import polarisStyles from '@shopify/polaris/build/esm/styles.css';
import {AppProvider, Banner, ProgressBar, Page, Card, Text, BlockStack, InlineStack, TextField, Button, FooterHelp, Link, PageActions, Grid} from '@shopify/polaris';

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import { useState } from 'react';

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export default function App() {
  const emptyPeople = {
    name: "",
    phone: "+44"
  };
  const [people, setPeople] = useState([emptyPeople]);
  const [sendProgress, setProgress] = useState(0);
  const [currentInvite, setCurrentInvite] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const knuthShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleNameChange = (
    (newValue, index) => {
      setPeople((prevState) => prevState.map((item, psIndex) => {
        if (psIndex === index) {
          return {
            name: newValue,
            phone: item.phone
          };
        } else {
          return item;
        }
      }))
    }
  );

  const handlePhoneChange = (
    (newValue, index) => {
      setPeople((prevState) => prevState.map((item, psIndex) => {
        if (psIndex === index) {
          return {
            name: item.name,
            phone: newValue
          };
        } else {
          return item;
        }
      }))
    }
  );

  const handleDelete = (index) => {
    setPeople((people) => people.filter((item, ogIndex) => index !== ogIndex))
  };

  const handleSend = async () => {
    if (people.length > 1) {
      const shuffledPeople = knuthShuffle(people);
      const matches = shuffledPeople.map((santa, index) => {
        const receiver = shuffledPeople[index + 1] || shuffledPeople[0];
        return {
          toPhone: santa.phone,
          message: `Hi ${santa.name},\nYou need to get a gift for ${receiver.name}.\nThanks\nSanta 🎅🏻\nPS\nKeep it a secret 🤫`
        }
      });

      setShowProgress(true);

      for (let [index, person] of matches.entries()) {
        setCurrentInvite((index + 1));
        setProgress(parseInt(((index + 1) / people.length) * 100));
        // Send data to the backend via POST
        const response = await fetch('/send', { 
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify({
            to: person.toPhone,
            message: person.message
          })
        });
        const messages = await response.json();
      }

      setShowProgress(false);
    }
  };

  const progressMarkup = showProgress && (
    <Banner title="Sending...">
      <Text>Invite {currentInvite} of { people.length}</Text>
      <ProgressBar progress={sendProgress}></ProgressBar>
    </Banner>
  );

  return (
    <html>
      <head>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@450;550;650;700&display=swap" />
        <Links />
      </head>
      <body>
        <AppProvider>
          <Page 
            title="🤫 Secret SMS Santa 🎅🏻"
            primaryAction={<Button variant="primary" onClick={handleSend}>Send {people.length} Invites</Button>}
          >
            <BlockStack gap="500">
              <Text as="p" variant="bodyMd">
                Add your participants below, then click the button above to send the SMS invites.
              </Text>
              { progressMarkup }
              <Grid>
              {
                people.map((person, index) => 
                  <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 6}} key={index}>
                    <Card>
                      <InlineStack align="space-between">
                        <Text as="h2" variant="headingSm">Person #{ (index + 1) }</Text>
                        <Link 
                          monochrome 
                          onClick={() => { 
                            handleDelete(index) 
                          }}
                        >Delete</Link>
                      </InlineStack>
                      <TextField
                        label="Name"
                        value={person.name}
                        onChange={(val) => {
                          handleNameChange(val, index)
                        }}
                        autoComplete="off"
                      />
                      <TextField
                        label="Phone Number"
                        value={person.phone}
                        onChange={(val) => {
                          handlePhoneChange(val, index)
                        }}
                        type="tel"
                        autoComplete="off"
                      />
                    </Card>
                  </Grid.Cell>
                )
              }
              </Grid>
              <PageActions
                secondaryActions={[
                  {
                    content: 'Add person',
                    onAction: () => {
                      setPeople([...people, emptyPeople])
                    }
                  }
                ]}
              />
            </BlockStack>
            <FooterHelp>
              Built by {' '}
              <Link url="https://www.stephenkeable.co.uk">
                Stephen Keable
              </Link>
            </FooterHelp>
          </Page>
        </AppProvider>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
