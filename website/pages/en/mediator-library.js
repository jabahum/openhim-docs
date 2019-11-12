const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const MediatorListContainer = () => (
  <Container className="mainContainer documentContainer postContainer" background="light">
    A list of Mediators...
  </Container>
);

function MediatorLibrary(props) {
  return (
    <div>
      <Container className="mainContainer documentContainer postContainer" background="light">
        <div className="post">
          <header className="postHeader">
            <h1>OpenHIM Mediator Library</h1>
          </header>
          <p>This is like the app store for the OpenHIM. Here you will find a number of mediators that are designed to extend the OpenHIM's functionality for a specific purpose. Browse the mediators below to see if any suit your needs. If not, then it is easy to create your own.</p>
          <p>To get your own mediator published here all you need to do is follow the github repository naming convention. Any public repository beginning with "openhim-mediator" will be displayed here.</p>
          <div className="docs-prevnext">
            <a className="docs-prev button" href="/openhim-docs/docs/introduction/about">Create a new mediator</a>
          </div>
        </div>
      </Container>
      <MediatorListContainer />
    </div>
  );
}

module.exports = MediatorLibrary;
