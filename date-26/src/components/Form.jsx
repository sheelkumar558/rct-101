import React, { useState } from "react";
import ShowData from "./ShowData";

const Form = () => {
  const [form, setForm] = useState({});
  const [data,setData] = useState("");
 const onChenge = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checked") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setData(form);
  };
  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter name...."
            value={form.username}
            onChange={onChenge}
          />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email...."
            value={form.email}
            onChange={onChenge}
          />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password...."
            value={form.password}
            onChange={onChenge}
          />
        </div>
        <div>
          <label htmlFor="">Age: </label>
          <input
            type="number"
            name="age"
            placeholder="Enter age...."
            value={form.age}
            onChange={onChenge}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="isIndian"
            checked={form.isIndian}
            onChange={onChenge}
          />
          <label htmlFor=""> : Is Indian </label>
        </div>
        <div>
          <input type="radio" name="gender" value="male" onChange={onChenge} />
          <label htmlFor=""> : Male </label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={onChenge}
          />
          <label htmlFor=""> : Female </label>
        </div>
        <div>
          <label >City : </label>
          <select name="city" onChenge={onchange}>
            <option value="Delhi">Delhi</option>
            <option value="Bangaluru">Bangaluru</option>
            <option value="Pune">Pune</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>

        <div>
          <label htmlFor="">: User Resume </label>
          <input
            type="file"
            name="resume"
            accept="image/png,image/jpeg,application/pdf"
            files={form.resume}
            onChange={onChenge}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ShowData data={data} />
    </div>
  );
};

export default Form;
