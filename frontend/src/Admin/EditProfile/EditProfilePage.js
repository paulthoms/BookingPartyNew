import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Form from '../../Normal/component/Card/Form/Form';
import variables from '../context/variables';

function EditProfilePage(){
    
    return (
        <div key = "Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Profile" describe="Edit Profile"><Form key = "Edit Profile" submit = "Edit Profile" fields = {variables.fields.UserProfile} /></Card>
        </div>
    );
}

export default EditProfilePage;