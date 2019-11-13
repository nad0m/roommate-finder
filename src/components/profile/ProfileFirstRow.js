import React from 'react';

const ProfileFirstRow = () => {

    return (
        <div className="edit-item-container">
            <div className="profile-edit-item ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div class="fields">
    <div class="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #" />
    </div>
    <div class="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
    </div>
    <div class="six wide field">
      <label>Expiration</label>
      <div class="two fields">
        <div class="field">
          <select class="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div class="field">
          <input type="text" maxlength="4" placeholder="Year" />
        </div>
      </div>
    </div>
  </div>
                
            </div>

        </div>
    );
}

export default ProfileFirstRow;