import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/loginStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm(){
    return email.length > 0 && password.length > 0;
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
          <li><a href="Programs">Treniruočių programos</a></li>
          <li><a href="contact">Kontaktai</a></li>
          <li><a href="register">Registracija</a></li>
          <li><a href="login">Prisijungti</a></li>
        </ul>
      </nav>
      
      <div className={mainStyle.Login}>
        <h1>PRISIJUNGTI</h1>
        <p>Užpildykite visus laukus</p>
        <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>El. paštas</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
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
                placeholder="Įrašykite savo slaptažodį"
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
              Prisijungti
            </Button>
          </Form>
      </div>
    </main>
  );
}