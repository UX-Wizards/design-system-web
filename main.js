{
  // const { useState } = window["React"]
  const { AppBar, Drawer, Tabs, Tab, Toolbar } = window['MaterialUI'];
  const { Box, Typography } = window['MaterialUI'];
  const { List, ListItem, ListItemText } = window['MaterialUI'];
  const {
    HashRouter: Router,
    Switch,
    Route,
    Link: RouterLink,
    useLocation,
  } = window["ReactRouterDOM"];

  const dswContent = [
    {
      heading: "Introduction (Laura)",
      subheadings: [
        {
          subtitle: "Installation and Usage",
          anchor: "introduction--installation-and-usage",
        }
      ],
      route: "/introduction",
      component: <UXWIntroduction />,
    },
    {
      heading: "Voice and Tone (Laura)",
      subheadings: [
        {
          subtitle: "Language",
          anchor: "voice--voice-language",
        }
      ],
      route: "/voice",
      component: <UXWVoiceAndTone />,
    },
    {
      heading: "Logos and Icons (Seiko)",
      subheadings: [
        {
          subtitle: "Logos",
          anchor: "snav-logos",
        },
        {
          subtitle: "Clearance",
          anchor: "snav-clearance",
        },
        {
          subtitle: "Icongraphy Style",
          anchor: "snav-icongraphy",
        },
        {
          subtitle: "Library",
          anchor: "snav-library",
        },
      ],
      route: "/logos",
      component: <UXWLogosAndIcons />,
    },
    {
      heading: "Colors (Max)",
      subheadings: [],
      route: "/colors",
      component: <UXWColors />,
    },
    {
      heading: "Typography (Sidney)",
      subheadings: [
        {
          subtitle: "This is Overpass",
          anchor: "typography--this-is-overpass",
        },
        {
          subtitle: "Scale",
          anchor: "typography--scale",
        },
        {
          subtitle: "Guidelines",
          anchor: "typography--guidelines",
        },
        {
          subtitle: "Usage",
          anchor: "typography--usage",
        },
        {
          subtitle: "CSS",
          anchor: "typography--css",
        },
      ],
      route: "/typography",
      component: <UXWTypography />,
    },
    {
      heading: "Design Assets (Javi)",
      subheadings: [],
      route: "/designassets",
      component: <UXWDesignAssets />,
    },
    {
      heading: "Contributors (Dhruv)",
      subheadings: [],
      route: "/contributors",
      component: <UXWContributors />,
    },
  ];

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function UXWCodePanel(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className="w-128">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="HTML" />
            <Tab label="CSS" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          FOO
        </TabPanel>
        <TabPanel value={value} index={1}>
          CSS
        </TabPanel>
      </div>
    );
  }

  function Main(props) {
    const location = useLocation();

    return (
      <div className="bg-white">
        <React.Fragment>
          <AppBar position="fixed" style={{zIndex: 1201}}>
            <Toolbar>
              <div className="flex flex-row flex-shrink-0">
                <div className="flex flex-col">
                  <div className="text-lg" style={{fontFamily: "Overpass"}}>UX Wizards</div>
                  <div className="text-md" style={{fontFamily: "Overpass"}}>Design System</div>
                </div>
                <img className="pl-4 w-16 h-12" src="logo.png" />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent">
            <Toolbar />
            <nav>
              <List>
                {dswContent.map(({ heading, subheadings, route }, index) => (
                  <React.Fragment key={`navlink-fragment-${index}`}>
                    <RouterLink to={route}>
                      <ListItem button key={`navlink-${index}`}>
                        <ListItemText primary={heading} />
                      </ListItem>
                    </RouterLink>
                    {subheadings.map(({subtitle, anchor}, subindex) => (location.pathname === route &&
                    <div onClick={() => document.getElementById(anchor).scrollIntoView({behavior: 'smooth'})}>
                      <ListItem button key={`navlink-sub-${index}-${subindex}`}>
                        <ListItemText primary={subtitle} className="pl-8"/>
                      </ListItem>
                    </div>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </nav>
          </Drawer>
          <div className="flex">
            <main className="flex-grow ml-80 py-4 pr-8">
              <Toolbar /> {/* Spacer */}

              <Switch>
                {dswContent.map(({ route, component, heading }, index) => {
                  return (
                    <Route key={`route-${index}`} path={route}>
                      <div className="flex-col flex-shrink-0 pb-8" key={`section-${index}`}>
                        <h1 className="text-3xl pb-4">{heading}</h1>
                        {component}
                      </div>
                    </Route>
                  )
                })}
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </div>
    )
  }

  ReactDOM.render(
    <Router>
      <Main />
    </Router>,
    document.getElementById('app')
  );
}