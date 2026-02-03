import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Coffee,
} from "lucide-react";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    {
      category: "starters",
      name: "Artisan Pastries",
      description: "Fresh-baked croissants and morning pastries",
      price: "$4.50",
      image: "🥐",
    },
    {
      category: "starters",
      name: "Avocado Toast",
      description: "Smashed avocado on multigrain sourdough",
      price: "$8.50",
      image: "🥑",
    },
    {
      category: "starters",
      name: "Cheese & Charcuterie Board",
      description: "Selection of local cheeses and cured meats",
      price: "$14.00",
      image: "🧀",
    },
    {
      category: "main",
      name: "Grilled Panini",
      description: "Premium Italian panini with fresh ingredients",
      price: "$11.50",
      image: "🥪",
    },
    {
      category: "main",
      name: "Caesar Salad",
      description: "Crispy romaine with house-made dressing",
      price: "$9.50",
      image: "🥗",
    },
    {
      category: "main",
      name: "Caprese Sandwich",
      description: "Fresh mozzarella, tomato, and basil",
      price: "$10.00",
      image: "🍅",
    },
    {
      category: "beverages",
      name: "Espresso",
      description: "Single or double shot of rich espresso",
      price: "$3.50",
      image: "☕",
    },
    {
      category: "beverages",
      name: "Cappuccino",
      description: "Silky smooth espresso with steamed milk",
      price: "$4.50",
      image: "🥛",
    },
    {
      category: "beverages",
      name: "Iced Latte",
      description: "Refreshing iced espresso and cold milk",
      price: "$5.00",
      image: "🧊",
    },
    {
      category: "beverages",
      name: "Matcha Latte",
      description: "Whisked matcha with your choice of milk",
      price: "$5.50",
      image: "🍵",
    },
    {
      category: "desserts",
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center",
      price: "$6.50",
      image: "🍰",
    },
    {
      category: "desserts",
      name: "Cheesecake Slice",
      description: "New York style with berry compote",
      price: "$5.50",
      image: "🎂",
    },
    {
      category: "desserts",
      name: "Macarons",
      description: "Assorted French macarons, 3 pieces",
      price: "$6.00",
      image: "🍪",
    },
  ];

  const featuredDishes = [
    {
      name: "Seasonal Fruit Tart",
      description: "Our signature pastry with fresh seasonal fruits",
      price: "$7.50",
      image: "🍓",
      popular: true,
    },
    {
      name: "House Blend Coffee",
      description: "Smooth, balanced blend roasted in-house",
      price: "$4.00",
      image: "☕",
      popular: true,
    },
    {
      name: "Chocolate Croissant",
      description: "Buttery layers with Belgian chocolate",
      price: "$4.50",
      image: "🥐",
      popular: true,
    },
  ];

  const filteredMenu =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cafe-cream text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Coffee className="w-8 h-8 text-cafe-brown" />
              <span className="text-2xl font-bold font-playfair text-cafe-brown">
                BrewHaven
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-cafe-brown transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("featured")}
                className="text-foreground hover:text-cafe-brown transition-colors"
              >
                Featured
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-cafe-brown transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-cafe-brown transition-colors"
              >
                Contact
              </button>
            </nav>
            <button className="px-6 py-2 bg-cafe-brown text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-b from-cafe-brown to-cafe-brown-dark text-white flex items-center justify-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-cafe-cream opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-cafe-dark-green opacity-10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair mb-6">
            BrewHaven
          </h1>
          <p className="text-xl sm:text-2xl font-lora mb-4 text-cafe-cream">
            A Student-Run Café For Authentic Taste
          </p>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            Handcrafted coffee, fresh pastries, and good vibes—all in one place
          </p>
          <button
            onClick={() => scrollToSection("menu")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cafe-cream text-cafe-brown font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95"
          >
            View Menu
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cafe-cream" />
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="featured" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-cafe-brown mb-4">
              Customer Favorites
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most beloved dishes—must-try items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-cafe-beige to-cafe-tan flex items-center justify-center text-7xl overflow-hidden">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {dish.image}
                  </div>
                  <div className="absolute top-4 right-4 bg-cafe-dark-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cafe-brown mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-lora">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cafe-brown">
                      {dish.price}
                    </span>
                    <button className="px-4 py-2 bg-cafe-brown text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-cafe-brown mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our carefully curated selection
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Items" },
              { id: "starters", label: "Starters" },
              { id: "main", label: "Main Course" },
              { id: "beverages", label: "Beverages" },
              { id: "desserts", label: "Desserts" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? "bg-cafe-brown text-white shadow-lg"
                    : "bg-cafe-beige text-cafe-brown hover:bg-cafe-tan"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item, idx) => (
              <div
                key={idx}
                className="group bg-cafe-cream rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:bg-white animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold text-cafe-brown mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 font-lora text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cafe-brown">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-cafe-dark-green text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 text-sm font-semibold">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cafe-beige"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-6xl text-center">☕</div>
            <div className="animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-cafe-brown mb-6">
                About BrewHaven
              </h2>
              <p className="text-lg font-lora text-foreground mb-4 leading-relaxed">
                We're a student-run café born from a passion for quality coffee
                and community. Founded by a group of dedicated college students,
                BrewHaven started as a simple idea: create a space where
                students could gather, study, and enjoy exceptional coffee.
              </p>
              <p className="text-lg font-lora text-foreground mb-6 leading-relaxed">
                What began in a small corner has grown into a beloved campus
                staple. We believe in sustainability, support local suppliers,
                and pour love into every cup we serve.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown mb-2">
                    100%
                  </div>
                  <p className="text-sm text-muted-foreground">Fresh Daily</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown mb-2">
                    Local
                  </div>
                  <p className="text-sm text-muted-foreground">Suppliers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cafe-brown mb-2">
                    Est. 2024
                  </div>
                  <p className="text-sm text-muted-foreground">Student-Run</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-cafe-brown">
                  Our Values
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 bg-cafe-dark-green rounded-full" />
                    Quality coffee sourced responsibly
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 bg-cafe-dark-green rounded-full" />
                    Community-first approach
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 bg-cafe-dark-green rounded-full" />
                    Sustainable practices
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 bg-cafe-dark-green rounded-full" />
                    Supporting student entrepreneurs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair text-cafe-brown mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us on campus or get in touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-cafe-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-cafe-brown mb-1">
                    Location
                  </h3>
                  <p className="text-foreground font-lora">
                    Campus Commons Building, Room 102
                    <br />
                    College Avenue, University Campus
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-cafe-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-cafe-brown mb-1">
                    Phone
                  </h3>
                  <p className="text-foreground font-lora">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-cafe-brown transition"
                    >
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-cafe-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-cafe-brown mb-1">
                    Email
                  </h3>
                  <p className="text-foreground font-lora">
                    <a
                      href="mailto:info@brewhaven.com"
                      className="hover:text-cafe-brown transition"
                    >
                      info@brewhaven.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-lg text-cafe-brown mb-4">
                  Hours
                </h3>
                <div className="space-y-2 font-lora text-foreground">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 7:00
                    AM - 8:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 9:00 AM -
                    6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> 9:00 AM -
                    5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="animate-slide-up">
              <div className="bg-cafe-beige rounded-xl overflow-hidden h-80 md:h-full min-h-96 flex items-center justify-center border-4 border-cafe-brown border-opacity-20">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cafe-brown mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground font-lora">
                    📍 Campus Commons, Room 102
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Google Maps integration available)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe-brown-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6" />
                <span className="text-xl font-bold font-playfair">
                  BrewHaven
                </span>
              </div>
              <p className="text-sm opacity-80">
                A student-run café celebrating authentic taste and community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <button
                    onClick={() => scrollToSection("menu")}
                    className="hover:opacity-100 transition"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:opacity-100 transition"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:opacity-100 transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Mon-Fri: 7AM - 8PM</li>
                <li>Sat: 9AM - 6PM</li>
                <li>Sun: 9AM - 5PM</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white bg-opacity-20 mb-8" />

          {/* Copyright */}
          <div className="text-center text-sm opacity-70">
            <p>
              &copy; 2024 BrewHaven. A student-run café. All rights reserved. |{" "}
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              {" | "}
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
