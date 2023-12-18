# UGMC Electronic Medical Record System

Welcome to the UGMC Electronic Medical Record System, a project by Polymorph Labs Ghana Limited.

## Overview

This system is designed to facilitate the management of patient records at the University of Ghana Medical Center (UGMC). The Electronic Medical Record (EMR) system enables front-desk executives to efficiently register patients and initiate encounters.

## Functional Requirements

### Patient Registration

The front-desk executive can register patients who do not already exist in the system. The following details are captured during patient registration:

- Patient ID
- Surname
- Other Names
- Gender
- Phone Number
- Residential Address
- Emergency Name
- Emergency Contact
- Relationship with Patient

### Encounter Initiation

The front-desk executive can start an encounter (visitation) for a patient, capturing the following details:

- Patient ID
- Date and Time of Encounter
- Type of Encounter (Emergency/OPD/Specialist Care)

## Technologies Used

- Node.js
- Express
- MongoDB

## Prerequisites

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- MongoDB installed and running locally. [Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ugmc-emr.git
   cd ugmc-emr
