import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('receive');
  const [amount, setAmount] = useState('');
  const [history, setHistory] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // Load history data from local storage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('history');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Update local storage whenever history changes
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const addRecord = () => {
    const newRecord = { name, date, type, amount };
    setHistory([...history, newRecord]);
    setName('');
    setDate('');
    setType('receive');
    setAmount('');
  };
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredHistory = history.filter(record =>
    record.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="App w-[50%] mx-auto">
      <h2 className='text-wheat text-[20px] mb-10 font-bold'>Track Management History</h2>
      <div>
        <label htmlFor="name" className='text-white flex text-[20px]'>Name:</label>
        <input type="text" className='flex my-[10px] rounded w-[100%] h-8' id="name" value={name} onChange={e => setName(e.target.value)} required/>
        <label htmlFor="date" className='text-white flex text-[20px]'>Date:</label>
        <input type="date" className='flex my-[10px] rounded w-[100%] h-8 pl-2' id="date" value={date} onChange={e => setDate(e.target.value)} />
        <label htmlFor="type" className='text-white flex text-[20px]'>Type:</label>
        <select id="type" value={type} onChange={e => setType(e.target.value)} className='flex my-[10px] rounded w-[100%] h-8'>
          <option value="receive">Receive</option>
          <option value="send">Send</option>
        </select>
        <label htmlFor="amount" className='text-white flex text-[20px]'>Amount:</label>
        <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} className='flex my-[10px] rounded w-[100%] h-8'/>
        <button onClick={addRecord} className='w-[100%] bg-lightBlue rounded-lg my-[10px] h-10 hover:bg-wheat'>Add Record</button>
      </div>
      <div>
        <input type="text" id="searchInput" value={searchInput} onChange={handleSearchChange} className='w-[70%] p-[10px] rounded-lg' placeholder="Search in table..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.type}</td>
              <td>{record.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
