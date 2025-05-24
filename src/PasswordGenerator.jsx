import React, { useState } from 'react'
import './App.css';
import CharacterSets from './Data/DummyPassKeyData';
import { toast } from 'react-toastify';

export default function PasswordGenerator() {
    let [passwordForm,setPasswordForm]=useState({
        Length:undefined,
        CapitalLetters: false,
        LowercaseLetters: false,
        SpecialCharacters: false,
        Numbers: false
    });
    let[generatedPassword,setPassword]= useState();

    const submitForm = (event)=>{
        event.preventDefault();
        let wholeCharacters ='';
        let generatedPassword = '';

        if(passwordForm.Length==undefined){
            toast.error('Please provide valid length'); 
            return;
        }
        if(passwordForm.CapitalLetters)wholeCharacters += CharacterSets.UppercaseLetters;
        if(passwordForm.LowercaseLetters)wholeCharacters += CharacterSets.LowercaseLetters;
        if(passwordForm.Numbers)wholeCharacters += CharacterSets.Numbers;
        if(passwordForm.SpecialCharacters)wholeCharacters += CharacterSets.SpecialCharacters;
        for(let i =0; i<passwordForm.Length; i++){
            generatedPassword += wholeCharacters.charAt(Math.floor(Math.random() * wholeCharacters.length ));
        }
        setPassword(generatedPassword);
    }

    let handleChange = (e)=>{
        const { name, type, value, checked } = e.target;
        setPasswordForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    let copyPassword =()=>{
        navigator.clipboard.writeText(generatedPassword);
        toast.success("Password copied successfully");
    }

 
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
                <h3 className="text-center mb-4">🔐 Password Generator</h3>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="Length" className="form-label">Password Length</label>
                        <input
                            type="number"
                            className="form-control"
                            id="Length"
                            name="Length"
                            value={passwordForm.Length}
                            onChange={handleChange}
                            min="1"
                        />
                        <div className="form-text">Choose a length between 6 and 32 characters.</div>
                    </div>

                    <div className="form-check mb-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="CapitalLetters"
                            name="CapitalLetters"
                            checked={passwordForm.CapitalLetters}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="CapitalLetters">
                            Include Capital Letters
                        </label>
                    </div>

                    <div className="form-check mb-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="LowercaseLetters"
                            name="LowercaseLetters"
                            checked={passwordForm.LowercaseLetters}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="LowercaseLetters">
                            Include Lowercase Letters
                        </label>
                    </div>

                    <div className="form-check mb-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="SpecialCharacters"
                            name="SpecialCharacters"
                            checked={passwordForm.SpecialCharacters}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="SpecialCharacters">
                            Include Special Characters
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="Numbers"
                            name="Numbers"
                            checked={passwordForm.Numbers}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="Numbers">
                            Include Numbers
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        🔄 Generate Password
                    </button>
                </form>

                <div className={generatedPassword==undefined?'d-none':'mt-3'}>
                    Generated Password : {generatedPassword} <span className="ms-1 btn btn-success" onClick={copyPassword}>Copy</span>
                </div>
            </div>
        </div>
    );
}