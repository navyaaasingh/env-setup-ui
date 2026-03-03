import { useCallback, useRef } from 'react';
import { useAgent } from '../context/AgentContext';

const DEFAULT_STEPS = [
  { id: 1, label: 'Searching data...', status: 'pending' },
  { id: 2, label: 'Analyzing results...', status: 'pending' },
  { id: 3, label: 'Generating output...', status: 'pending' },
];

export function useAgentState() {
  const { state, dispatch } = useAgent();
  const timeoutsRef = useRef([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const startThinking = useCallback(() => {
    clearAllTimeouts();
    dispatch({ type: 'SET_STATE', payload: 'thinking' });
    dispatch({ type: 'SET_STEPS', payload: DEFAULT_STEPS });
    dispatch({ type: 'SET_OUTPUT', payload: null });
    dispatch({ type: 'SET_ERROR', payload: null });

    const t1 = setTimeout(() => {
      dispatch({ type: 'SET_STATE', payload: 'executing' });
      dispatch({ type: 'UPDATE_STEP', payload: { id: 1, status: 'active' } });

      const t2 = setTimeout(() => {
        dispatch({ type: 'UPDATE_STEP', payload: { id: 1, status: 'completed' } });
        dispatch({ type: 'UPDATE_STEP', payload: { id: 2, status: 'active' } });

        const t3 = setTimeout(() => {
          dispatch({ type: 'UPDATE_STEP', payload: { id: 2, status: 'completed' } });
          dispatch({ type: 'SET_STATE', payload: 'waiting' });

          const t4 = setTimeout(() => {
            dispatch({ type: 'UPDATE_STEP', payload: { id: 3, status: 'active' } });
            dispatch({ type: 'SET_STATE', payload: 'executing' });

            const t5 = setTimeout(() => {
              dispatch({ type: 'UPDATE_STEP', payload: { id: 3, status: 'completed' } });
              dispatch({
                type: 'SET_OUTPUT',
                payload: 'Agent execution completed successfully. All tasks have been processed and results are ready.',
              });
              dispatch({ type: 'SET_STATE', payload: 'completed' });
            }, 2000);
            timeoutsRef.current.push(t5);
          }, 500);
          timeoutsRef.current.push(t4);
        }, 2000);
        timeoutsRef.current.push(t3);
      }, 2000);
      timeoutsRef.current.push(t2);
    }, 1500);
    timeoutsRef.current.push(t1);
  }, [dispatch, clearAllTimeouts]);

  const startExecuting = useCallback(() => {
    dispatch({ type: 'SET_STATE', payload: 'executing' });
  }, [dispatch]);

  const waitForInput = useCallback(() => {
    dispatch({ type: 'SET_STATE', payload: 'waiting' });
  }, [dispatch]);

  const complete = useCallback(
    (output) => {
      dispatch({ type: 'SET_OUTPUT', payload: output });
      dispatch({ type: 'SET_STATE', payload: 'completed' });
    },
    [dispatch]
  );

  const setError = useCallback(
    (msg) => {
      clearAllTimeouts();
      dispatch({ type: 'SET_ERROR', payload: msg });
    },
    [dispatch, clearAllTimeouts]
  );

  const reset = useCallback(() => {
    clearAllTimeouts();
    dispatch({ type: 'RESET' });
  }, [dispatch, clearAllTimeouts]);

  const updateStep = useCallback(
    (id, status) => {
      dispatch({ type: 'UPDATE_STEP', payload: { id, status } });
    },
    [dispatch]
  );

  const approveStep = useCallback(() => {
    const waitingStep = state.steps.find((s) => s.status === 'pending');
    if (waitingStep) {
      dispatch({ type: 'UPDATE_STEP', payload: { id: waitingStep.id, status: 'active' } });
      dispatch({ type: 'SET_STATE', payload: 'executing' });

      const t = setTimeout(() => {
        dispatch({ type: 'UPDATE_STEP', payload: { id: waitingStep.id, status: 'completed' } });
        const remainingSteps = state.steps.filter(
          (s) => s.id !== waitingStep.id && s.status !== 'completed'
        );
        if (remainingSteps.length === 0) {
          dispatch({
            type: 'SET_OUTPUT',
            payload: 'Agent execution completed successfully after manual approval.',
          });
          dispatch({ type: 'SET_STATE', payload: 'completed' });
        } else {
          dispatch({ type: 'SET_STATE', payload: 'waiting' });
        }
      }, 2000);
      timeoutsRef.current.push(t);
    }
  }, [state.steps, dispatch]);

  return {
    state,
    dispatch,
    startThinking,
    startExecuting,
    waitForInput,
    complete,
    setError,
    reset,
    updateStep,
    approveStep,
  };
}
