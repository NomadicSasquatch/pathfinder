"use client";

import React from 'react';
import Grid from '../Grid/Grid';
import Dropdown from '../Dropdown/Dropdown';
import styles from './ControlPanel.module.css';
import { DEFAULT_ALGO_DROPDOWN_TEXT  } from '../../config/config';

const GridPanel = ({ handleSetStartButton, handleSetEndButton, setCurrentAction, selectedAlgorithm, setSelectedAlgorithm, handleRunButton, isRunning, handleClearPathButton, handleClearGridButton, isRunningAlgo }) => {
  const algorithms = [`Breadth-First Search`, `Depth-First Search`, `Dijkstra's Algorithm`, `A* Algorithm`];

  return (
    <div className={styles.gridPanel}>
      <div className={styles.leftGroup}>
        <button onClick = {()=>handleSetStartButton()} className={styles.button} disabled={isRunningAlgo}>
          Set Start Node
        </button>
        <button onClick = {()=>handleSetEndButton()} className={styles.button} disabled={isRunningAlgo}>
          Set End Node
        </button>
        <button onClick = {()=>setCurrentAction('toggleWall')} className={styles.button} disabled={isRunningAlgo}>
          Toggle Wall
        </button>
        <Dropdown options={algorithms} defaultText={DEFAULT_ALGO_DROPDOWN_TEXT} setSelectedAlgorithm={setSelectedAlgorithm} isRunningAlgo={isRunningAlgo}>

        </Dropdown>
        <button onClick = {()=>handleRunButton()} className={styles.button} disabled={!(DEFAULT_ALGO_DROPDOWN_TEXT.localeCompare(selectedAlgorithm))}>
          {isRunning ? "Pause Algorithm" : "Run Algorithm"}
        </button>
      </div>
      <div className={styles.rightGroup}>
        <button onClick = {()=>handleClearPathButton()} className={styles.button}>
          Clear Paths
        </button>
        <button onClick = {()=>handleClearGridButton()} className={styles.button}>
          Clear Grid
        </button>
      </div>
    </div>
  );
};

export default GridPanel;
