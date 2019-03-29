import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
        Dear all!
    </div>
    <div>
        This application was based on multiple docker images, built with Travis CI and pushed over to the DockerHub.
        Then it was deployed on AWS ElasticBeanstalk.
    </div>
    <div>
        Enjoy it! Have a nice weekend!
    </div>
    <div>
        <Link to="/"> Go back to home page!</Link>
    </div>
  );
};
