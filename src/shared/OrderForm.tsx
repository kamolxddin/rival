import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    region: '',
    phone: '',
    address: '',
    length: '',
    width: '',
    thickness: '',
    color: '',
    material: '',
    orderName: '',
    paymentType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                  <h2 className="text-2xl font-bold text-gray-900">{t('form.title')}</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.firstName')} *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.lastName')} *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Birth Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.birthDate')} *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <input
                            type="number"
                            name="birthDay"
                            placeholder={t('form.day')}
                            required
                            min="1"
                            max="31"
                            value={formData.birthDay}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            name="birthMonth"
                            placeholder={t('form.month')}
                            required
                            min="1"
                            max="12"
                            value={formData.birthMonth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            name="birthYear"
                            placeholder={t('form.year')}
                            required
                            min="1920"
                            max="2024"
                            value={formData.birthYear}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Region & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.region')} *
                        </label>
                        <input
                          type="text"
                          name="region"
                          required
                          value={formData.region}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.phone')} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+998 90 123 45 67"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.address')} *
                      </label>
                      <div className="relative">
                        <textarea
                          name="address"
                          rows={3}
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                        />
                        <MapPin className="absolute top-3 right-3 w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Dimensions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.length')} ({t('form.cm')}) *
                        </label>
                        <input
                          type="number"
                          name="length"
                          required
                          min="0"
                          step="0.1"
                          value={formData.length}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.width')} ({t('form.cm')}) *
                        </label>
                        <input
                          type="number"
                          name="width"
                          required
                          min="0"
                          step="0.1"
                          value={formData.width}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.thickness')} ({t('form.cm')}) *
                        </label>
                        <input
                          type="number"
                          name="thickness"
                          required
                          min="0"
                          step="0.1"
                          value={formData.thickness}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Color & Material */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.color')} *
                        </label>
                        <select
                          name="color"
                          required
                          value={formData.color}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">{t('form.color')}</option>
                          <option value="gray">{t('form.color.gray')}</option>
                          <option value="black">{t('form.color.black')}</option>
                          <option value="white">{t('form.color.white')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.material')} *
                        </label>
                        <select
                          name="material"
                          required
                          value={formData.material}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">{t('form.material')}</option>
                          <option value="ldsp">{t('form.material.ldsp')}</option>
                          <option value="lmdf">{t('form.material.lmdf')}</option>
                          <option value="acrylic">{t('form.material.acrylic')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Order Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.orderName')}
                      </label>
                      <input
                        type="text"
                        name="orderName"
                        placeholder={`${t('form.orderName')} (${t('form.color')}, ${t('form.material')})`}
                        value={formData.orderName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    {/* Payment Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('form.payment')} *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="relative flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                          <input
                            type="radio"
                            name="paymentType"
                            value="cash"
                            required
                            checked={formData.paymentType === 'cash'}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <span className="peer-checked:font-bold peer-checked:text-gray-900 text-gray-600">
                            {t('form.payment.cash')}
                          </span>
                          <div className="absolute inset-0 border-2 border-gray-900 rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </label>
                        <label className="relative flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                          <input
                            type="radio"
                            name="paymentType"
                            value="card"
                            required
                            checked={formData.paymentType === 'card'}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <span className="peer-checked:font-bold peer-checked:text-gray-900 text-gray-600">
                            {t('form.payment.card')}
                          </span>
                          <div className="absolute inset-0 border-2 border-gray-900 rounded-lg opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        {t('form.close')}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      >
                        {t('form.submit')}
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
