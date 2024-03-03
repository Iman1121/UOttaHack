import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import { Dropdown, initMDB } from "mdb-ui-kit";


import TextForm from './TextForm'; 
import FileUpload from './FileUpload';
import Message from './Message'; // Assuming you have a MessageComponent defined

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    fetchMessages(); // Fetch messages when component mounts
    const interval = setInterval(fetchMessages, 2000); // Fetch messages every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  const updateMessages = async (newMessage) => {
    try {
      
     
      const updatedResponse = await axios.get('/api/messages');
      setMessages(updatedResponse.data);
      
    } catch (error) {
      console.error('Error updating messages:', error);
    }
  };

  const [url, setUrl] = useState('');

  const handleUpload = (uploadedUrl) => {
    setUrl(uploadedUrl);
  };

  return (
    <div className="Chat">
      <div>Chat </div>
      
      <FileUpload setUrl={setUrl} onUpload={handleUpload}/>
      <TextForm url = {url} updateMessages={updateMessages}/> 
      <div className="Messages">
        {messages.map(message => (
          <Message key={message._id} message={message} />
        ))}
      </div> 
      <section style="background-color: #eee;">
  <div class="container py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center p-3"
            style="border-top: 4px solid #ffa900;">
            <h5 class="mb-0">Chat messages</h5>
            <div class="d-flex flex-row align-items-center">
              <span class="badge bg-warning me-3">20</span>
              <i class="fas fa-minus me-3 text-muted fa-xs"></i>
              <i class="fas fa-comments me-3 text-muted fa-xs"></i>
              <i class="fas fa-times text-muted fa-xs"></i>
            </div>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">

            <div class="d-flex justify-content-between">
              <p class="small mb-1">Timona Siera</p>
              <p class="small mb-1 text-muted">23 Jan 2:00 pm</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;"/>
              <div>
                <p class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;">For what reason
                  would it
                  be advisable for me to think about business content?</p>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1 text-muted">23 Jan 2:05 pm</p>
              <p class="small mb-1">Johny Bullock</p>
            </div>
            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">Thank you for your believe in
                  our
                  supports</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;"/>
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1">Timona Siera</p>
              <p class="small mb-1 text-muted">23 Jan 5:37 pm</p>
            </div>
            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;"/>
              <div>
                <p class="small p-2 ms-3 mb-3 rounded-3" style="background-color: #f5f6f7;">Lorem ipsum dolor
                  sit amet
                  consectetur adipisicing elit similique quae consequatur</p>
              </div>
            </div>

            <div class="d-flex justify-content-between">
              <p class="small mb-1 text-muted">23 Jan 6:10 pm</p>
              <p class="small mb-1">Johny Bullock</p>
            </div>
            <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">Dolorum quasi voluptates quas
                  amet in
                  repellendus perspiciatis fugiat</p>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;"/>
            </div>

          </div>
          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <div class="input-group mb-0">
              <input type="text" class="form-control" placeholder="Type message"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-warning" type="button" id="button-addon2" style="padding-top: .55rem;">
                Button
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
      
    </div>
  );
};

export default Chat;
