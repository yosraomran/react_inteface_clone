import React, { useState } from 'react';
import { FaExclamationTriangle, FaEye, FaEyeSlash } from 'react-icons/fa';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [experience, setExperience] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleExperienceChange = (event) => setExperience(event.target.value);
    const handleRememberMeChange = (event) => setRememberMe(event.target.checked);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Experience:', experience);
        console.log('Remember Me:', rememberMe);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };   

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handlePasswordChange = (event) => {
      const { value } = event.target;
      setPassword(value);
      setIsPasswordValid(validatePassword(value));
    };

    const validatePassword = (password) => {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%+*#?&])[A-Za-z\d@$!%+*#?&]{8,}$/;
      return regex.test(password);
    };

    return (
        <div className="flex flex-col items-start p-4 sm:p-8 gap-5 w-full sm:w-1/2 bg-white shadow-md rounded-2xl">
            <div className="w-full text-center text-xl font-bold text-[#1F81B9]">Create Account</div>
            <div className="mt-4 w-full w-432px h-23px font-open-sans font-normal text-base leading-[150%] flex items-center justify-center text-[#333333]">
                Create your account in a second to receive our latest news!
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <label className="font-semibold text-sm text-[#333333]">Email</label>
                <div className={`flex flex-row items-center p-2 w-full bg-white border ${isEmailValid ? 'border-[#dddddd]' : 'border-red-500'} rounded-lg`}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`flex-grow bg-transparent border-none outline-none text-sm text-${isEmailValid ? '[#BBBBBB]' : 'red-500'}`}
                        placeholder="Placeholder"
                    />
                </div>
                {!isEmailValid && (
                    <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                        <FaExclamationTriangle />
                        Invalid email format. Please enter a valid email address.
                    </div>
                )}
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="font-semibold text-sm text-[#333333]">Password</label>
              <div className={`flex flex-row items-center p-2 w-full bg-white border ${isPasswordValid ? 'border-[#dddddd]' : 'border-[#D44848]'} rounded-lg`}>
                  <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                      className="flex-grow bg-transparent border-none outline-none text-sm text-[#BBBBBB]"
                      placeholder="Placeholder"
                  />
                  <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-500 focus:outline-none"
                  >
                      {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
              </div>
              {isPasswordValid ? null : (
                  <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                      <FaExclamationTriangle />
                      Error Message.
                      <a href="#" className="text-red-600 underline text-[#E59191]">Learn more</a>
                  </div>
              )}
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <label className="font-semibold text-sm text-[#333333]">Year of experience</label>
                <div className="flex flex-row items-center p-2 w-full bg-white border border-[#dddddd] rounded-lg">
                    <select
                        value={experience}
                        onChange={handleExperienceChange}
                        className="flex-grow bg-transparent border-none outline-none text-sm text-[#333333]"
                    >
                        <option>Please Select</option>
                    </select>
                </div>
            </div>
            <div div className="flex flex-row items-center p-2 w-full bg-white">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                selected
                className="w-6 h-6 border-blue-500 rounded-md bg-blue-500"
              />
                <span className="flex-grow text-sm text-gray-700">Remember Me</span>
            </div>
            <div className="flex flex-row justify-center items-center p-2 w-full bg-[#1F81B9] rounded-lg">
                <button
                    onClick={handleSubmit}
                    className="w-full text-sm text-white"
                >
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default CreateAccount;
