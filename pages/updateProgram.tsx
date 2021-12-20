import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/loginStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

export default function updateSchedule(){
  const [wName, setWName] = useState("");
  const [title, setTitle] = useState("");
  const [participiants, setParticipiants] = useState("");
  const [duration, setDuration] = useState("");

  function validateForm(){
    return wName.length > 0 && title.length > 0 &&
           participiants.length > 0 && duration.length > 0
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
        <h1>Pridėti</h1>
        <p>Užpildykite visus laukus</p>
        <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="wName">
              <Form.Label>Darbuotojo pavadinimas</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="text"
                value={wName}
                placeholder="Įrašykite darbuotoją"
                onChange={(e) => setWName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="title">
              <Form.Label>Pavadinimas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={title}
                placeholder="Įrašykite užsimėimo pavadinimą"
                onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="participiants">
              <Form.Label>Dalyvių skaičius</Form.Label>
              <br></br>
              <Form.Control
                type="number"
                value={participiants}
                placeholder="Įrašykite užsiėmimo tipą"
                onChange={(e) => setParticipiants(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="duration">
              <Form.Label>Trukmė</Form.Label>
              <br></br>
              <Form.Control
                type="number"
                value={duration}
                placeholder="Įrašykite užsiėmimo trukmę"
                onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
              Saugoti
            </Button>
          </Form>
      </div>
    </main>
  );
}