import React, { Component } from "react"
import SideMenu from "./../../components/sidemenu"
import Button from '@material-ui/core/Button'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="first-section">
          <div>
            <h1>Home</h1>
          </div>
          <Button variant="contained" color="primary">
          Click
          </Button>
        </section>
        <SideMenu />
      </div>
    )
  }
}
