export interface Ticket {
  id: string;
  title: string;
  request: string;
  state: 'open' | 'closed';
}
