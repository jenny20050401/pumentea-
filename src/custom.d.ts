declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'project-id'?: string;
      'agent-id'?: string;
      'language-code'?: string;
      'location'?: string;
      'max-query-length'?: string; // 👈 補上這行
    };
    'df-messenger-chat-bubble': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & { 'chat-title'?: string };
  }
}