{
  const { AppBar, Drawer, Tabs, Tab, Toolbar } = window['MaterialUI'];
  const { Box, Fab } = window['MaterialUI'];
  const { List, ListItem, ListItemText } = window['MaterialUI'];
  const { makeStyles } = window['MaterialUI'];
  const {
    HashRouter: Router,
    Switch,
    Redirect,
    Route,
    Link: RouterLink,
    useLocation,
  } = window["ReactRouterDOM"];
  const Prism = window["Prism"];
  const { useInView } = window["ReactIntersectionObserver"]
  const { configureStore } = window["RTK"]
  const { Provider, useSelector } = window["ReactRedux"]

  const fabCopy = {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    outline: "none"
  }

  const useStylesMain = makeStyles({
    topappbar: {
      backgroundColor: "#152145",
      zIndex: 1201,
      fontFamily: "Overpass",
    },
    codesnippettab: {
      backgroundColor: "#152145",
      fontFamily: "Overpass",
      "&:focus": {
        outline: "none",
      }
    },
    navitem: {
      color: "#152145",
      fontWeight: 300,
    },
    navitemselected: {
      color: "#152145",
      fontWeight: 800,
    }
  })

  const useStylesDrawer = makeStyles({
    root: {
      fontFamily: "Overpass",
    },
    paper: {
      width: "28ch",
    }
  })

  const initialNavState = []
  const addNavAction = anchor => ({ type: "addVisibleNav", payload: anchor })
  const removeNavAction = anchor => ({ type: "removeVisibleNav", payload: anchor })
  const clearNavAction = () => ({ type: "clearVisibleNav" })
  const navReducer = (state = initialNavState, action) => {
    switch (action.type) {
      case "addVisibleNav": {
        return state.findIndex((element) => action.payload == element) != -1 ? state : state.concat(action.payload)
      }
      case "removeVisibleNav": {
        return state.filter((anchor) => action.payload != anchor)
      }
      case "clearVisibleNav": {
        return []
      }
      default:
        return state
    }
  }

  const reduxStore = configureStore({
    reducer: {
      navVisibility: navReducer
    }
  })

  const dswContent = [
    {
      heading: "Introduction",
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
      heading: "Who We Are",
      subheadings: [
        {
          subtitle: "About Us",
          anchor: "about--about",
        },
        {
          subtitle: "Our Mission",
          anchor: "about--mission"
        },
        {
          subtitle: "Personality",
          anchor: "about--personality"
        },
        {
          subtitle: "Values",
          anchor: "about--values"
        }
      ],
      route: "/about",
      component: <UXWWhoWeAre />,
    },
    {
      heading: "How We Sound (Laura)",
      subheadings: [
        {
          subtitle: "Voice",
          anchor: "voice--voice",
        },
        {
          subtitle: "Tone",
          anchor: "voice--tone"
        }
      ],
      route: "/voice",
      component: <UXWHowWeSound />,
    },
    {
      heading: "Logos and Icons (Seiko)",
      subheadings: [],
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
          <Box className="bg-gray-100" style={{fontFamily: "monospace"}} p={3} dangerouslySetInnerHTML={{__html: children}} />
        )}
      </div>
    );
  }

  function UXWCodePanelSingle(props) {
    const snippet = props.children
    let finalSnippet = ""

    let prismSnippet = ""
    if (props.lang === "html") {
      prismSnippet = Prism.highlight(snippet, Prism.languages.markup, 'markup');
    } else if (props.lang === "css") {
      prismSnippet = Prism.highlight(cssSnippet, Prism.languages.css, 'css');
    }
    for (let line of prismSnippet.split("\n")) {
      finalSnippet = finalSnippet + line.replace(/^  /, "&nbsp;&nbsp;") + "<br/>"
    }

    const onCopyClick = () => {
      navigator.clipboard.writeText(snippet)
    }

    return (
      <div className="w-128 relative">
        <Box className="bg-gray-100" style={{fontFamily: "monospace"}} p={3} dangerouslySetInnerHTML={{__html: finalSnippet}} />
        <Fab style={fabCopy} size="small" onClick={onCopyClick}>
          <i className="bi bi-clipboard"></i>
        </Fab>
      </div>
    );
  }

  function UXWCodePanelHTMLCSS(props) {
    const [value, setValue] = React.useState(0);
    const htmlSnippet = props.children[0].props.children
    const cssSnippet = props.children[1].props.children

    const classesMain = useStylesMain();

    const prismHtmlSnippet = Prism.highlight(htmlSnippet, Prism.languages.markup, 'markup');
    let finalHtmlSnippet = ""
    for (let line of prismHtmlSnippet.split("\n")) {
      finalHtmlSnippet = finalHtmlSnippet + line.replace(/^  /, "&nbsp;&nbsp;") + "<br/>"
    }

    const prismCssSnippet = Prism.highlight(cssSnippet, Prism.languages.css, 'css');
    let finalCssSnippet = ""
    for (let line of prismCssSnippet.split("\n")) {
      finalCssSnippet = finalCssSnippet + line.replace(/^  /, "&nbsp;&nbsp;") + "<br/>"
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onCopyClick = () => {
      if (value == 0) {
        navigator.clipboard.writeText(htmlSnippet)
      } else if (value == 1) {
        navigator.clipboard.writeText(cssSnippet)
      }
    }

    return (
      <div className="w-128 relative">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: "#E6B161"}}}>
            <Tab label="HTML" className={classesMain.codesnippettab} />
            <Tab label="CSS" className={classesMain.codesnippettab} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {finalHtmlSnippet}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {finalCssSnippet}
        </TabPanel>
        <Fab style={fabCopy} size="small" onClick={onCopyClick}>
          <i className="bi bi-clipboard"></i>
        </Fab>
      </div>
    );
  }

  function UXWSubsection({title, anchor, children}) {
    const ref = React.useRef();
    const isInView = useInView(ref, { threshold: 0 })

    React.useEffect(() => {
      if (isInView) {
        reduxStore.dispatch(addNavAction(anchor))
      } else {
        reduxStore.dispatch(removeNavAction(anchor))
      }
    })

    return (
      <React.Fragment>
        <h2 ref={ref} className="text-xl py-4" id={anchor}>{title}</h2>
        {children}
      </React.Fragment>
    )
  }

  function Main(props) {
    const location = useLocation();
    const activeSubsections = useSelector((state) => state.navVisibility)

    const classesMain = useStylesMain();
    const classesDrawer = useStylesDrawer();

    return (
      <div className="bg-white">
        <React.Fragment>
          <AppBar position="fixed" className={classesMain.topappbar}>
            <Toolbar>
              <div className="flex flex-row flex-shrink-0 items-center">
                <div className="text-lg">Design System</div>
                <img className="pl-4 w-16 h-12" src="logo.png" />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" classes={{root: classesDrawer.root, paper: classesDrawer.paper}} >
            <Toolbar />
            <nav>
              <List>
                {dswContent.map(({ heading, subheadings, route }, index) => (
                  <React.Fragment key={`navlink-fragment-${index}`}>
                    <RouterLink to={route} >
                      <ListItem button key={`navlink-${index}`}>
                        <ListItemText disableTypography primary={heading} className={location.pathname === route ? classesMain.navitemselected : classesMain.navitem} />
                      </ListItem>
                    </RouterLink>
                    {subheadings.map(({subtitle, anchor}, subindex) => (location.pathname === route &&
                    <div key={`navlink-sub-${index}-${subindex}`} onClick={() => document.getElementById(anchor).scrollIntoView({behavior: 'smooth', block: 'center'})}>
                      <ListItem button>
                        <ListItemText disableTypography primary={subtitle} className={`pl-8 ${activeSubsections.findIndex((element) => element === anchor) !== -1 ? classesMain.navitemselected : classesMain.navitem}`} />
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
                <Route exact path="/">
                  <Redirect to="/introduction" />
                </Route>
                {dswContent.map(({ route, component, heading }, index) => {
                  return (
                    <Route key={`route-${index}`} path={route}>
                      <div className="flex-col flex-shrink-0 pb-8" style={{fontFamily: "Overpass"}} key={`section-${index}`}>
                        <h1 className="pb-4">{heading}</h1>
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
    <Provider store={reduxStore}>
      <Router>
        <Main />
      </Router>
    </Provider>
    ,
    document.getElementById('app')
  );
}
