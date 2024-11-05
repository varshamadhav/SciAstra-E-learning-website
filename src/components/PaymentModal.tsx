import { X, CreditCard, Smartphone } from 'lucide-react';
import { useState } from 'react';
import type { Course } from '../types';

interface PaymentModalProps {
  course: Course;
  onClose: () => void;
}

export function PaymentModal({ course, onClose }: PaymentModalProps) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleProceed = () => {
    if (step === 1 && paymentMethod) {
      setStep(2);
    } else if (step === 2 && verificationCode.length === 6) {
      // Simulate payment processing
      setTimeout(() => {
        alert('Payment successful! You can now access the course.');
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {step === 1 ? 'Select Payment Method' : 'Verify Payment'}
        </h2>

        {step === 1 ? (
          <div className="space-y-4">
            <div
              onClick={() => setPaymentMethod('card')}
              className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-3
                ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
            >
              <CreditCard className="h-6 w-6 text-indigo-600" />
              <span>Credit/Debit Card</span>
            </div>
            <div
              onClick={() => setPaymentMethod('upi')}
              className={`p-4 border rounded-lg cursor-pointer flex items-center space-x-3
                ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
            >
              <Smartphone className="h-6 w-6 text-indigo-600" />
              <span>UPI Payment</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600">
              Enter the 6-digit verification code sent to your device
            </p>
            <input
              type="text"
              maxLength={6}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter verification code"
            />
          </div>
        )}

        <div className="mt-6 space-y-4">
          <button
            onClick={handleProceed}
            disabled={step === 1 ? !paymentMethod : verificationCode.length !== 6}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step === 1 ? 'Proceed to Verification' : 'Complete Payment'}
          </button>
          <div className="text-center text-sm text-gray-500">
            Total Amount: ${course.discountedPrice}
          </div>
        </div>
      </div>
    </div>
  );
}