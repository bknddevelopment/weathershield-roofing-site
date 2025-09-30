'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Minus } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export interface ComparisonRow {
  feature: string;
  option1: string | boolean;
  option2: string | boolean;
  description?: string;
}

interface ComparisonTableProps {
  option1Title: string;
  option2Title: string;
  rows: ComparisonRow[];
  option1Color?: string;
  option2Color?: string;
}

export default function ComparisonTable({
  option1Title,
  option2Title,
  rows,
  option1Color = 'weather-teal',
  option2Color = 'weather-purple'
}: ComparisonTableProps) {
  const prefersReducedMotion = useReducedMotion();

  // Static color class mapping for Tailwind JIT compilation
  const colorClasses: Record<string, { headerBg: string; headerBorder: string; headerText: string; cellBg: string }> = {
    'weather-teal': {
      headerBg: 'bg-weather-primary-dark/10',
      headerBorder: 'border-weather-primary/30',
      headerText: 'text-weather-primary',
      cellBg: 'bg-weather-primary/5'
    },
    'weather-primary-dark': {
      headerBg: 'bg-weather-primary-dark/10',
      headerBorder: 'border-weather-primary/30',
      headerText: 'text-weather-primary',
      cellBg: 'bg-weather-primary/5'
    },
    'weather-purple': {
      headerBg: 'bg-weather-accent/10',
      headerBorder: 'border-weather-accent/30',
      headerText: 'text-weather-accent',
      cellBg: 'bg-weather-accent/5'
    },
    'weather-accent': {
      headerBg: 'bg-weather-accent/10',
      headerBorder: 'border-weather-accent/30',
      headerText: 'text-weather-accent',
      cellBg: 'bg-weather-accent/5'
    }
  };

  const option1Classes = colorClasses[option1Color] || colorClasses['weather-primary-dark'];
  const option2Classes = colorClasses[option2Color] || colorClasses['weather-accent'];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      if (value === true) {
        return (
          <div className="flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-weather-success" />
          </div>
        );
      } else {
        return (
          <div className="flex items-center justify-center">
            <XCircle className="w-6 h-6 text-weather-danger" />
          </div>
        );
      }
    }

    // Check for special markers in string values
    if (value === 'Yes' || value === '✓') {
      return (
        <div className="flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-weather-success" />
        </div>
      );
    }

    if (value === 'No' || value === '✗') {
      return (
        <div className="flex items-center justify-center">
          <XCircle className="w-6 h-6 text-weather-danger" />
        </div>
      );
    }

    if (value === 'N/A' || value === '-') {
      return (
        <div className="flex items-center justify-center">
          <Minus className="w-6 h-6 text-gray-400" />
        </div>
      );
    }

    return <div className="text-center text-weather-dark">{value}</div>;
  };

  return (
    <div className="w-full overflow-x-auto rounded-xl border-2 border-gray-200 shadow-lg">
      <table className="w-full bg-white">
        {/* Table Header */}
        <thead>
          <tr className="bg-gradient-to-r from-weather-light to-white">
            <th className="py-4 px-6 text-left text-weather-black font-bold text-lg border-b-2 border-gray-200">
              Feature
            </th>
            <th
              className={`py-4 px-6 text-center ${option1Classes.headerBg} border-b-2 ${option1Classes.headerBorder}`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`text-xl font-bold ${option1Classes.headerText}`}>
                  {option1Title}
                </div>
              </div>
            </th>
            <th
              className={`py-4 px-6 text-center ${option2Classes.headerBg} border-b-2 ${option2Classes.headerBorder}`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`text-xl font-bold ${option2Classes.headerText}`}>
                  {option2Title}
                </div>
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row, index) => (
            <motion.tr
              key={index}
              initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
              whileInView={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={!prefersReducedMotion ? {
                duration: 0.3,
                delay: index * 0.05,
              } : undefined}
              className={`
                border-b border-gray-200
                ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                hover:bg-weather-light/30 transition-colors
              `}
            >
              {/* Feature Name */}
              <td className="py-4 px-6">
                <div className="font-semibold text-weather-black mb-1">
                  {row.feature}
                </div>
                {row.description && (
                  <div className="text-sm text-weather-dark">{row.description}</div>
                )}
              </td>

              {/* Option 1 Value */}
              <td className={`py-4 px-6 ${option1Classes.cellBg}`}>
                {renderCell(row.option1)}
              </td>

              {/* Option 2 Value */}
              <td className={`py-4 px-6 ${option2Classes.cellBg}`}>
                {renderCell(row.option2)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* Mobile-friendly note */}
      <div className="sm:hidden bg-weather-light p-4 text-center text-sm text-weather-dark border-t border-gray-200">
        <p>Swipe left or right to see all columns</p>
      </div>
    </div>
  );
}
