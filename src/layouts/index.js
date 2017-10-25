import React from "react";
import Link from "gatsby-link";
import {Helmet} from "react-helmet";
import styles from "./index.css";
import Particle from "../components/particle";
import logo from "../img/logo.png";

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet defaultTitle="Rice Fintech Scholars">
      <title itemProp="name" lang="en">Rice Fintech Scholars</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Educating students on the code behind disruptive financial technologies." />
      <meta property="og:title" content="Rice Fintech Scholars" />
      <meta property="og:description" content="Educating students on the code behind disruptive financial technologies." />
      <meta property="og:url" content="http://ricefintech.org" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={logo} />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,300i,400,400i,600,600i,700,700i" rel="stylesheet" />
    </Helmet>
    <Particle />
    <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
      {children()}
    </div>
  </div>

  )

export default TemplateWrapper