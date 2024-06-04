import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const DeleteAccount = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [comments, setComments] = useState('');

    const handleReasonChange = (event) => setSelectedReason(event.target.value);
    const handleCommentsChange = (event) => setComments(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Reason:', selectedReason);
        console.log('Comments:', comments);
    };

    return (
        <div className="flex flex-col p-4 sm:p-6 w-full sm:w-1/2 bg-white shadow-md rounded-2xl">
            <h2 className="text-xl font-bold text-center text-[#1F81B9]">Delete Your Account</h2>
            <p className="mt-4 w-full w-432px h-23px font-open-sans font-normal text-base leading-[150%] flex items-center justify-center text-[#333333]">
                We're sorry to see you go. It would be great if we could know the reason behind.
            </p>
            <div className="mt-4">
            <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                <FaExclamationTriangle />
                Please select one of the below reasons.
            </div>
                <div className="mt-2">
                    {[
                        'I have privacy concerns.',
                        'I no longer find this useful.',
                        'I’m receiving irrelevant email contents.',
                        'I’m getting too many emails.',
                        'Others',
                    ].map((reason, index) => (
                        <div key={index} className="flex items-center gap-2 mt-2">
                            <input
                                type="radio"
                                id={`reason${index}`}
                                name="reason"
                                value={reason}
                                checked={selectedReason === reason}
                                onChange={handleReasonChange}
                                className="w-6 h-6 border-[#DDDDDD] rounded-full"
                            />
                            <label htmlFor={`reason${index}`} className="text-base text-[#333333]">
                                {reason}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <label htmlFor="comments" className="text-base text-[#333333]">Let us know if you've other comments.</label>
                <textarea
                    id="comments"
                    value={comments}
                    onChange={handleCommentsChange}
                    className="w-full mt-2 p-3 border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F81B9]"
                    rows="5"
                    placeholder="Your comments (Optional)"
                    maxLength="2000"
                ></textarea>
                <p className="text-right text-[#AAAAAA] mt-2">Max. 2000 characters</p>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-6 w-full py-3 bg-[#1F81B9] text-white font-semibold text-base rounded-lg hover:bg-[#166899]"
            >
                Submit
            </button>
        </div>
    );
};

export default DeleteAccount;
