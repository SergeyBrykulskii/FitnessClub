import React, { useState } from 'react';
import axios from '../../axios';
import { Button } from '../../components';

import styles from './AddMembership.module.scss'

export const AddMembership = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [gymName, setGymName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const membershipData = {
      name,
      description,
      price,
      gymName,
      startDate,
      endDate,
    };

    try {
      const response = await axios.post('/membershipGymName', membershipData);
      console.log(response.data);

      setName('');
      setDescription('');
      setPrice(0);
      setGymName('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add Membership</h1>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} required />
        </div>
        <div>
          <label>Gym Name</label>
          <input type="text" value={gymName} onChange={(e) => setGymName(e.target.value)} required />
        </div>
        <div>
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label>End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <Button text="Add" type="submit"/>
      </form>
    </div>
  );
};