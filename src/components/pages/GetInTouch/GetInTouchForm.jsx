import { useEffect, useState } from 'react';

import { contactBtnImg } from '../../../assets/images';

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messages, setMessages] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    setMessages(prev => [...prev, formData]);

    setFormData({ name: '', email: '', message: '' });

    console.log(formData, messages);
  };

  useEffect(() => {
    console.log(messages); // будет выводить актуальный массив после каждого обновления
  }, [messages]);
  return (
    <form className="get-contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Enter a Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button className="get-contact-btn" type="submit">
        <img src={contactBtnImg} alt="" />
        Send Message
      </button>
    </form>
  );
};

export { GetInTouchForm };
