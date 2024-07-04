import React from 'react';
import './style/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="container">
        <div className="jumbotron text-center mt-5">
            <h1 className="display-4">Welcome to Our Book Store!</h1>
            <p className="lead">Your journey to knowledge and growth starts here.</p>
        </div>

        <div className="content-section">
            <h2>About Books</h2>
            <p>
                Books are more than just pages and words; they are gateways to new worlds, knowledge, and perspectives. Reading books is essential for personal growth and development. Here are some reasons why books are important and how they can help in life-building:
            </p>
            <ul>
                <li><strong>Knowledge:</strong> Books are a rich source of knowledge, offering insights into various subjects, cultures, and experiences. They help us understand the world better.</li>
                <li><strong>Improved Focus and Concentration:</strong> Reading requires focus and concentration, which helps improve our attention span and ability to stay engaged with tasks.</li>
                <li><strong>Vocabulary Expansion:</strong> Regular reading introduces us to new words and phrases, enhancing our vocabulary and language skills.</li>
                <li><strong>Stress Reduction:</strong> Reading can be a great way to relax and escape from the stresses of daily life. A good book can transport us to another world, providing a mental break.</li>
                <li><strong>Empathy and Understanding:</strong> Books allow us to experience life through the eyes of others, fostering empathy and understanding towards different perspectives and cultures.</li>
                <li><strong>Creativity and Imagination:</strong> Reading stimulates our imagination and creativity, encouraging us to think outside the box and come up with new ideas.</li>
                <li><strong>Life Lessons:</strong> Many books offer valuable life lessons and morals, helping us navigate challenges and make better decisions in our lives.</li>
            </ul>
        </div>

        <div className="mt-5">
            <h2>Featured Books</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Book+1" /* Replace with your image URL */
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Book</h3>
                        <p>Description of the first book.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Book+2" /* Replace with your image URL */
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                        <h3>Second Book</h3>
                        <p>Description of the second book.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Book+3" /* Replace with your image URL */
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Book</h3>
                        <p>Description of the third book.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    </div>
  );
}

export default Home;
