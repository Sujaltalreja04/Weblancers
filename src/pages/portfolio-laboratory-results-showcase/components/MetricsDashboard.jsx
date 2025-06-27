import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsDashboard = ({ metrics }) => {
  const metricItems = [
    {
      key: 'totalProjects',
      label: 'Projects Completed',
      value: metrics.totalProjects,
      suffix: '+',
      icon: 'CheckCircle',
      color: 'text-accent'
    },
    {
      key: 'avgImprovement',
      label: 'Average Improvement',
      value: metrics.avgImprovement,
      suffix: '%',
      icon: 'TrendingUp',
      color: 'text-success'
    },
    {
      key: 'clientSatisfaction',
      label: 'Client Satisfaction',
      value: metrics.clientSatisfaction,
      suffix: '/10',
      icon: 'Star',
      color: 'text-gold'
    },
    {
      key: 'onTimeDelivery',
      label: 'On-Time Delivery',
      value: metrics.onTimeDelivery,
      suffix: '%',
      icon: 'Clock',
      color: 'text-conversion'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {metricItems.map((item) => (
        <div key={item.key} className="glassmorphism rounded-xl p-6 text-center group hover:shadow-glow transition-premium">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 group-hover:scale-110 transition-premium`}>
            <Icon name={item.icon} size={24} color={`var(--color-accent)`} />
          </div>
          <div className={`text-3xl font-bold ${item.color} mb-2`}>
            {item.value}{item.suffix}
          </div>
          <div className="text-text-secondary-dark text-sm font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsDashboard;