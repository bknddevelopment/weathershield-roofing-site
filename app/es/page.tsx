'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StaticImage from '../components/StaticImage';
import {
  Phone, Shield, Clock, CheckCircle, Home, Wrench,
  DollarSign, MapPin, Award, Users, Star, AlertTriangle,
  Umbrella, FileCheck, Calendar, ChevronRight, HandshakeIcon,
  Building2, Zap, HeartHandshake, BadgeCheck
} from 'lucide-react';

export default function SpanishLandingPage() {
  const services = [
    {
      icon: Home,
      title: 'Techado Residencial',
      description: 'Instalación profesional y reemplazo completo de techos residenciales con garantías extendidas',
      features: ['Garantía de por vida', 'Materiales premium', 'Instalación certificada'],
      link: '/services/residential-roofing'
    },
    {
      icon: Wrench,
      title: 'Reparación de Techos',
      description: 'Reparaciones rápidas y duraderas para proteger su hogar y su familia',
      features: ['Respuesta en 24 horas', 'Presupuesto gratis', 'Trabajo garantizado'],
      link: '/services/roof-repair'
    },
    {
      icon: AlertTriangle,
      title: 'Daños por Tormentas',
      description: 'Servicio de emergencia 24/7 para daños causados por tormentas y huracanes',
      features: ['Servicio de emergencia', 'Ayuda con seguro', 'Respuesta inmediata'],
      link: '/services/storm-damage'
    },
    {
      icon: Building2,
      title: 'Techado Comercial',
      description: 'Soluciones comerciales para negocios y propiedades de inversión',
      features: ['TPO y EPDM', 'Mantenimiento preventivo', 'Minimizamos interrupciones'],
      link: '/services/commercial-roofing'
    },
    {
      icon: Umbrella,
      title: 'Canaletas',
      description: 'Sistema completo de canaletas para proteger los cimientos de su casa',
      features: ['Sin obstrucciones', 'Aluminio resistente', 'Instalación profesional'],
      link: '/services/gutters'
    },
    {
      icon: Shield,
      title: 'Revestimiento',
      description: 'Revestimiento vinílico y de fibrocemento para protección total',
      features: ['Resistente al clima', 'Variedad de colores', 'Ahorro de energía'],
      link: '/services/siding'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      location: 'Myrtle Beach',
      rating: 5,
      text: 'Excelente servicio! El equipo habla español perfectamente y me ayudaron con todo el proceso del seguro después del huracán. Muy profesionales y puntuales.',
      project: 'Reemplazo completo del techo'
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Conway',
      rating: 5,
      text: 'Weather Shield fue la única compañía que realmente entendió nuestras necesidades. Trabajo de primera calidad y el precio más justo del mercado.',
      project: 'Reparación por daños de tormenta'
    },
    {
      name: 'Ana Martínez',
      location: 'North Myrtle Beach',
      rating: 5,
      text: 'Me encantó que tienen personal que habla español. Explicaron todo claramente y el financiamiento fue muy fácil. Altamente recomendados!',
      project: 'Nuevo techo y canaletas'
    },
    {
      name: 'Roberto Silva',
      location: 'Georgetown',
      rating: 5,
      text: 'Después de llamar a varias compañías de roof en Myrtle Beach, Weather Shield fue la más profesional. Trabajo impecable y garantía de por vida.',
      project: 'Techado residencial completo'
    }
  ];

  const trustIndicators = [
    { number: '15+', label: 'Años de Experiencia', icon: Award },
    { number: '5,000+', label: 'Techos Instalados', icon: Home },
    { number: '24/7', label: 'Servicio de Emergencia', icon: Clock },
    { number: 'A+', label: 'Calificación BBB', icon: BadgeCheck }
  ];

  const serviceAreas = [
    'Myrtle Beach', 'North Myrtle Beach', 'Conway', 'Socastee',
    'Georgetown', 'Florence', 'Aynor', 'Loris', 'Little River',
    'Pawleys Island', 'Surfside Beach', 'Garden City'
  ];

  const faqs = [
    {
      question: '¿Hablan español en Weather Shield?',
      answer: 'Sí! Tenemos personal que habla español fluidamente para atenderle mejor. Todos nuestros documentos y contratos están disponibles en español.'
    },
    {
      question: '¿Ofrecen financiamiento?',
      answer: 'Sí, ofrecemos varias opciones de financiamiento flexible con aprobación rápida. Planes desde 0% de interés disponibles para clientes calificados.'
    },
    {
      question: '¿Trabajan con compañías de seguro?',
      answer: 'Absolutamente. Somos expertos en reclamos de seguro y trabajamos directamente con su compañía de seguros. Le ayudamos con todo el proceso.'
    },
    {
      question: '¿Cuánto tiempo toma reemplazar un techo?',
      answer: 'La mayoría de los techos residenciales se completan en 1-2 días. Le proporcionamos un cronograma exacto durante su consulta gratuita.'
    },
    {
      question: '¿Ofrecen garantías?',
      answer: 'Sí, ofrecemos garantías líderes en la industria, incluyendo garantías de por vida en materiales y mano de obra para techos residenciales calificados.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section Mejorada */}
        <section className="relative min-h-[700px] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-weather-black/95 via-weather-black/80 to-weather-black/70 z-10" />
            <StaticImage
              src="/images/background/roof-replacement-services.jpg"
              alt="Compañías de roofing en Myrtle Beach SC - Weather Shield"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-5xl mx-auto text-center text-white">
              {/* Badge de confianza */}
              <div className="inline-flex items-center gap-2 bg-weather-primary/20 backdrop-blur-md border border-weather-primary/40 rounded-full px-6 py-3 mb-8">
                <Phone className="w-5 h-5 text-weather-primary animate-pulse" />
                <span className="font-bold text-lg">¡Hablamos Español! • (843) 493-4963</span>
              </div>

              {/* Título principal con keywords */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Las Mejores <span className="text-weather-primary">Compañías de Roof</span> en Myrtle Beach
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
                Compañías de Roofing en Myrtle Beach SC con 15+ Años de Experiencia
              </p>

              <p className="text-lg mb-10 text-white/80 max-w-3xl mx-auto">
                Weather Shield Roofing: Su techador de confianza. Especialistas certificados en daños
                por tormentas, reclamos de seguro, y soluciones de techado residencial y comercial.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link
                  href="tel:8434934963"
                  className="inline-flex items-center gap-3 bg-weather-primary hover:bg-weather-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Llamar Ahora: (843) 493-4963
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Presupuesto Gratis
                </Link>
              </div>

              {/* Indicadores de confianza */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                  >
                    <indicator.icon className="w-8 h-8 text-weather-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-weather-primary">{indicator.number}</div>
                    <div className="text-sm text-white/80">{indicator.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Emergencia */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between text-white">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-white/20 rounded-full p-3">
                  <AlertTriangle className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">¿Emergencia por Tormenta?</h3>
                  <p className="text-white/90">Servicio de emergencia 24/7 - Respuesta inmediata</p>
                </div>
              </div>
              <Link
                href="tel:8434934963"
                className="bg-white text-red-600 hover:bg-white/90 px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora: (843) 493-4963
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios Expandidos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nuestros Servicios de Techado</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Como una de las principales compañías de roofing en Myrtle Beach SC,
                ofrecemos soluciones completas para todas sus necesidades de techado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100"
                >
                  <div className="bg-weather-primary/10 rounded-lg p-4 mb-4 inline-block">
                    <service.icon className="w-10 h-10 text-weather-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-weather-primary font-bold hover:gap-3 transition-all"
                  >
                    Más información
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Financiamiento */}
        <section className="py-20 bg-gradient-to-br from-weather-primary to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-bold">Financiamiento Flexible</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6">
                    Opciones de Financiamiento Para Todos
                  </h2>
                  <p className="text-xl mb-6 text-white/90">
                    No deje que las preocupaciones financieras lo detengan. Ofrecemos múltiples opciones de
                    financiamiento para hacer su proyecto de techado accesible.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block">0% de Interés Disponible</strong>
                        <span className="text-white/80">Para clientes calificados</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block">Aprobación Rápida</strong>
                        <span className="text-white/80">Decisión en minutos, no días</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block">Sin Pago Inicial</strong>
                        <span className="text-white/80">Comience su proyecto hoy mismo</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="block">Planes Flexibles</strong>
                        <span className="text-white/80">Términos de 12 a 144 meses</span>
                      </div>
                    </li>
                  </ul>

                  <Link
                    href="/financing"
                    className="inline-flex items-center gap-2 bg-white text-weather-primary hover:bg-white/90 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                  >
                    Ver Opciones de Financiamiento
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Calculadora de Pagos</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <label className="text-sm text-white/80 block mb-1">Cotización del Proyecto</label>
                      <div className="text-2xl font-bold">Cotización Gratuita</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <label className="text-sm text-white/80 block mb-1">Financiamiento Disponible</label>
                      <div className="text-2xl font-bold">Planes Flexibles</div>
                    </div>
                    <p className="text-sm text-white/70 italic">
                      *Basado en crédito aprobado. Los términos pueden variar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Lo Que Dicen Nuestros Clientes Hispanos
              </h2>
              <p className="text-xl text-gray-600">
                Más de 500 familias hispanas confían en nosotros
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-sm text-weather-primary font-medium mt-1">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-weather-primary font-bold text-lg hover:gap-3 transition-all"
              >
                Ver más testimonios
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Por Qué Elegirnos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  ¿Por Qué Elegir Weather Shield?
                </h2>
                <p className="text-xl text-gray-600">
                  La compañía de roofing #1 para la comunidad hispana en Myrtle Beach
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <HandshakeIcon className="w-12 h-12 text-weather-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Servicio en Español Completo</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Personal que habla español nativo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Contratos y documentos en español</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Comunicación clara sin barreras de idioma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Atención personalizada a su cultura</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <Shield className="w-12 h-12 text-weather-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Experiencia y Confianza</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>15+ años sirviendo Myrtle Beach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Licencia completa y seguro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Certificaciones de fabricantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Garantías líderes en la industria</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <FileCheck className="w-12 h-12 text-weather-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Expertos en Seguros</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Manejamos su reclamo de principio a fin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Trabajamos con todas las aseguradoras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Opciones de pago flexible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Maximizamos su compensación</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <HeartHandshake className="w-12 h-12 text-weather-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Compromiso Comunitario</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Precios justos y transparentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Apoyamos negocios locales hispanos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Descuentos para veteranos y seniors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Participamos en eventos comunitarios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Nuestro Proceso Simple y Transparente
                </h2>
                <p className="text-xl text-gray-600">
                  De la inspección a la instalación, hacemos todo fácil para usted
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: '1',
                    title: 'Inspección Gratuita',
                    description: 'Evaluación completa de su techo sin compromiso',
                    icon: Calendar
                  },
                  {
                    step: '2',
                    title: 'Presupuesto Detallado',
                    description: 'Precio claro y justo con todas las opciones explicadas',
                    icon: FileCheck
                  },
                  {
                    step: '3',
                    title: 'Programación Flexible',
                    description: 'Trabajamos en su horario, incluyendo fines de semana',
                    icon: Clock
                  },
                  {
                    step: '4',
                    title: 'Instalación Profesional',
                    description: 'Trabajo limpio, rápido y garantizado de por vida',
                    icon: BadgeCheck
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="bg-weather-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                        {item.step}
                      </div>
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-weather-primary/30" />
                      )}
                    </div>
                    <item.icon className="w-10 h-10 text-weather-primary mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
                <p className="text-xl text-gray-600">
                  Todo lo que necesita saber sobre nuestros servicios
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">¿Tiene más preguntas?</p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 text-weather-primary font-bold text-lg hover:gap-3 transition-all"
                >
                  Ver todas las preguntas frecuentes
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Servicio */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 text-weather-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">
                  Servimos Todo el Grand Strand
                </h2>
                <p className="text-xl text-gray-600">
                  Compañías de roof en Myrtle Beach y áreas circundantes
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-weather-primary hover:text-white transition-all cursor-pointer"
                  >
                    <MapPin className="w-5 h-5 mx-auto mb-2 opacity-50" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-weather-primary/10 border-2 border-weather-primary/30 rounded-xl p-8 mt-10 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Servicio Local con Experiencia Global
                </h3>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  Como una de las principales compañías de roofing en Myrtle Beach SC,
                  entendemos las necesidades únicas de nuestra comunidad hispana.
                  Combinamos técnicas internacionales con conocimiento local del clima costero.
                </p>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 bg-weather-primary text-white hover:bg-weather-primary/90 px-6 py-3 rounded-lg font-bold transition-all"
                >
                  Ver todas las ubicaciones
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-weather-primary to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo Para Proteger Su Hogar?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Únase a miles de familias hispanas que confían en Weather Shield Roofing.
                Obtenga su inspección y presupuesto gratis hoy mismo.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Zap className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Respuesta Rápida</h3>
                    <p className="text-white/80">Inspección en 24-48 horas</p>
                  </div>
                  <div>
                    <HeartHandshake className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Precio Justo</h3>
                    <p className="text-white/80">Sin cargos ocultos</p>
                  </div>
                  <div>
                    <Shield className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold text-lg mb-2">Garantizado</h3>
                    <p className="text-white/80">Trabajo y materiales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:8434934963"
                  className="inline-flex items-center gap-3 bg-white text-weather-primary hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Llamar: (843) 493-4963
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all"
                >
                  <FileCheck className="w-6 h-6" />
                  Solicitar Presupuesto
                </Link>
              </div>

              <p className="mt-6 text-white/70 text-sm">
                Disponible 24/7 para emergencias • Hablamos español
              </p>
            </div>
          </div>
        </section>

        {/* Schema.org Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Weather Shield Roofing - Compañías de Roofing en Myrtle Beach",
              "alternateName": "Weather Shield - Compañías de Roof en Myrtle Beach",
              "description": "Las mejores compañías de roofing en Myrtle Beach SC. Servicio en español, financiamiento disponible, emergencias 24/7.",
              "url": "https://weathershieldroofers.com/es",
              "telephone": "+18434934963",
              "email": "roofing@weathershieldroofers.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6891",
                "longitude": "-78.8867"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "Varies",
              "paymentAccepted": ["Cash", "Credit Card", "Financing"],
              "areaServed": [
                "Myrtle Beach", "North Myrtle Beach", "Conway",
                "Georgetown", "Florence", "Socastee", "Little River"
              ],
              "serviceType": [
                "Techado Residencial",
                "Reparación de Techos",
                "Daños por Tormentas",
                "Techado Comercial",
                "Instalación de Canaletas",
                "Revestimiento"
              ],
              "availableLanguage": ["English", "Spanish"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "487"
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}