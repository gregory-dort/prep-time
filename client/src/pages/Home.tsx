import { useState } from 'react';
import { Header, Footer, Modal, SignInForm, SignUpForm, Schedule, MealList } from '../components';

const Home = () => {
    
    return (
        <div>
            <Header />
            <main className = "bg-gradient-to-br from-yellow-100 to-orange-300 min-h-screen flex items-center mt-20">
                <Schedule />
                <MealList />
            </main>
            <Footer />
        </div>
    )
}

export default Home;