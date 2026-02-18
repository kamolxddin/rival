import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Showroom() {
  const { t} = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real application, you would integrate with a video player API
  };

  return (
    <section id='showroom' className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">{t('showroom.title')}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('showroom.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Video Player Container */}
          <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <>
                {/* Video Thumbnail/Placeholder */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayClick}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow mb-4 mx-auto"
                      aria-label="Video ijro etish"
                    >
                      <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" fill="currentColor" />
                    </motion.button>
                    <p className="text-lg sm:text-xl text-white font-medium">
                      {t('showroom.watchVideo')}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Showroom Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-3xl sm:text-4xl font-bold mb-2">500+</p>
              <p className="text-gray-400">{t('showroom.projects')}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-3xl sm:text-4xl font-bold mb-2">1000+</p>
              <p className="text-gray-400">{t('showroom.clients')}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <p className="text-3xl sm:text-4xl font-bold mb-2">4+ {t('showroom.years')}</p>
              <p className="text-gray-400">{t('showroom.experience')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}