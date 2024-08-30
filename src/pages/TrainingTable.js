import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the import path as needed

const TrainingTable = ({ epochData }) => {
  const [currentEpoch, setCurrentEpoch] = useState(0);

  useEffect(() => {
    if (currentEpoch >= epochData.length) return;

    const timeInSeconds = parseInt(epochData[currentEpoch].time.split(':')[0]) * 60 + parseInt(epochData[currentEpoch].time.split(':')[1]);

    const handleEpochComplete = () => {
      setCurrentEpoch(prevEpoch => prevEpoch + 1);
    };

    // Only set up the timer when the current epoch changes
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Epoch</th>
              <th>Train Loss</th>
              <th>Validation Loss</th>
              <th>Accuracy</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {epochData.map((epoch, index) => (
              <tr key={index} style={{ backgroundColor: index === currentEpoch ? '#f0f8ff' : 'transparent' }}>
                <td>{epoch.epoch}</td>
                <td>{epoch.train_loss.toFixed(6)}</td>
                <td>{epoch.valid_loss.toFixed(6)}</td>
                <td>{(epoch.accuracy * 100).toFixed(2)}%</td>
                <td>
                  {index === currentEpoch
                    ? <CountdownTimer initialTime={parseInt(epoch.time.split(':')[0]) * 60 + parseInt(epoch.time.split(':')[1])} onComplete={handleEpochComplete} />
                    : epoch.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }, [currentEpoch, epochData]);

  return null;
};

export default TrainingTable;
