import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
      const { person } = this.props;

      const {
        name: { title, first, last },
        email,
        dob: { age },
        picture: { large }
      } = person;

      return(
        <div className="profile">
          <img src={ large } alt={ first } />
          <h2>{title} {first} {last}</h2>
          <h4>{age} anos</h4>
          <h5>email: {email}</h5>
        </div>
      );
  }
}

Profile.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Profile;