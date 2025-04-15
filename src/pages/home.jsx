import 'animate.css';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';


function Home() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    return (
        <>
            <Carousel orientation="vertical" plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                height={'100vh'}
                withIndicators
                withControls={false} >
                <Carousel.Slide className='animate__animated animate__bounce'>
                    <div className="flex PlayfairDisplay-Bold flex-col background justify-center align-baseline animate__animated animate__fadeIn">
                        <div className="flex flex-col justify-center sm:ps-20 ps-12 pe-10">
                            <h1 className="PlayfairDisplay-Bold font-bold text-2xl 530:text-4xl sm:text-5xl animate__animated animate__fadeInUp">Hi!</h1>
                            <h2 className="PlayfairDisplay-Bold font-bold text-2xl 530:text-4xl sm:text-5xl mt-3 animate__animated animate__fadeInUp">I&#39;m Bhaumik</h2>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide className='animate__animated animate__bounce'>
                    <div className="flex PlayfairDisplay-Bold flex-col background2 justify-center align-baseline animate__animated animate__fadeIn">
                        <div className="flex flex-col justify-center sm:ps-20 ps-12 pe-10">
                            <h1 className="PlayfairDisplay-Bold font-bold text-3xl 530:text-4xl sm:text-5xl animate__animated animate__fadeInUp">I am</h1>
                            <h2 className="PlayfairDisplay-Bold font-bold text-3xl 530:text-4xl sm:text-5xl mt-3 animate__animated animate__fadeInUp">a Web Developer</h2>
                        </div>
                    </div>
                </Carousel.Slide>
            </Carousel>
        </>
    )
}


export default Home