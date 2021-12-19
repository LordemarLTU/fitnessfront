import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/registerStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

export default function Register(){
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm(){
    return fname.length > 0 && lname.length > 0 &&
           email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  return (
    <main className={mainStyle.main}>
      <nav className={navStyle.navigation}>
        <div>
          <h1>Fit<span>ness</span></h1>
        </div>
        <ul>
          <li><a href="/">Pagrindinis</a></li>
          <li><a href="Schedule">Tvarkaraščiai</a></li>
          <li><a href="programs">Treniruočių programos</a></li>
          <li><a href="contact">Kontaktai</a></li>
          <li><a href="register">Registracija</a></li>
          <li><a href="login">Prisijungti</a></li>
        </ul>
      </nav>
      
      <div className={mainStyle.Register}>
        <h1>Registruotis</h1>
        <p>Užpildykite visus laukus</p>
        <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fname">
              <Form.Label>Vardas</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="text"
                value={fname}
                placeholder="Įrašykite savo vardą"
                onChange={(e) => setFName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="lname">
              <Form.Label>Pavardė</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={lname}
                placeholder="Įrašykite savo pavardę"
                onChange={(e) => setLName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="email">
              <Form.Label>El. paštas</Form.Label>
              <br></br>
              <Form.Control
                type="email"
                value={email}
                placeholder="Įrašykite savo el. paštą"
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="password">
              <Form.Label>Slaptažodis</Form.Label>
              <br></br>
              <Form.Control
                type="password"
                value={password}
                placeholder="Įrašykite slaptažodį"
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
              Registruotis
            </Button>
          </Form>
      </div>
    </main>
  );
}