
export type PravReaction = 'idle' | 'greet' | 'think' | 'celebrate' | 'warn' | 'confused';

export type PravEvent =
  | 'NAVIGATE_END'
  | 'SCROLL_HALF'
  | 'FORM_SUBMIT_SUCCESS'
  | 'ERROR_SHOWN'
  | 'IDLE'
  | 'WAKE';

export function getReactionForEvent(event: PravEvent): PravReaction {
  switch (event) {
    case 'NAVIGATE_END':
      return 'greet';
    case 'SCROLL_HALF':
      return 'think';
    case 'FORM_SUBMIT_SUCCESS':
      return 'celebrate';
    case 'ERROR_SHOWN':
      return 'confused';
    case 'IDLE':
      return 'idle';
    case 'WAKE':
      return 'greet';
    default:
      return 'idle';
  }
}
