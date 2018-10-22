import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    it('Should say hello!', () => {
      const comp = new HomeComponent();
      expect(comp.message).toBe('Hello');
    });
});
