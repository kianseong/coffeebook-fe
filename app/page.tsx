"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import CoffeeIcon from '@/components/coffeeIcon';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
            <CoffeeIcon />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">CoffeeBook</span>
        </div>
        <div className="flex gap-4">
          <Button as={Link} href="/register" color="primary" variant="flat" size="lg" startContent={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          }>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to{" "}
          <span className="text-amber-600 dark:text-amber-400">CoffeeBook</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Your digital companion for coffee lovers. Discover, share, and explore the world of coffee with fellow enthusiasts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as={Link} href="/register" color="primary" size="lg" className="text-lg px-8 py-6">
            Join CoffeeBook
          </Button>
          <Button variant="bordered" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Why Choose CoffeeBook?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Connect with Coffee Lovers</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-400">
                Join a community of passionate coffee enthusiasts from around the world. Share your experiences, discover new brews, and make lasting connections.
              </p>
            </CardBody>
          </Card>

          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Discover New Brews</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-400">
                Explore a vast collection of coffee recipes, brewing methods, and coffee shop recommendations. From pour-over to espresso, find your perfect cup.
              </p>
            </CardBody>
          </Card>

          <Card className="text-center">
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Personalized Experience</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-400">
                Get personalized coffee recommendations based on your preferences. Track your favorite brews and discover new ones tailored to your taste.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <CardBody className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coffee Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of coffee lovers and become part of the CoffeeBook community today.
            </p>
            <Button as={Link} href="/register" color="default" size="lg" variant="solid" className="text-lg px-8 py-6 bg-white text-amber-600 hover:bg-gray-100">
              Create Your Account
            </Button>
          </CardBody>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <CoffeeIcon />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">CoffeeBook</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Connecting coffee lovers around the world, one cup at a time.
          </p>
          <Divider className="my-6" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 CoffeeBook. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
