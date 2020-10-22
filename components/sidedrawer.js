import React, {useState} from 'react'
import { List, ListItem, ListItemText, IconButton, Drawer } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    MuiDrawer: {
      background: "#56377E",
    },
    list: {
      width: 250,
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`,
    },
    TheIconButton: {
      marginTop: "3rem",
      color: "white",
      marginLeft: "20rem",
      ["@media (max-width: 1000px)"]: {
        marginLeft: "28rem",
      },
      ["@media (max-width: 800px)"]: {
        marginLeft: "25rem",
      },
      ["@media (max-width: 700px)"]: {
        marginLeft: "22rem",
      },
      ["@media (max-width: 600px)"]: {
        marginLeft: "19rem",
      },
      ["@media (max-width: 500px)"]: {
        marginLeft: "16rem",
      },
      ["@media (max-width: 400px)"]: {
        marginLeft: "13rem",
      },
      ["@media (max-width: 300px)"]: {
        marginLeft: "10rem",
      },
    }
  }))

const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false })
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }
      setState({ [anchor]: open })
    }

    const sideDrawerList = anchor => (
        <div
        className={classes.list}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <List component="nav">
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      );

    return (
        <>
        <React.Fragment>
        <IconButton
          edge="end"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
          className={classes.TheIconButton}>
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={state.right} onOpen={toggleDrawer("right", true)} onClose={toggleDrawer("right", false)} classes={{paper: classes.MuiDrawer}}>
        {sideDrawerList("right")}
        </Drawer>
      </React.Fragment>
        </>
    )
}


export default SideDrawer;