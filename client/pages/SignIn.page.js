import { Page, expect } from '@playwright/test';

export class SignIn {
  constructor(page) {
    this.page = page;
  }

  async login() {
    // Environment variable referred here is defined in .env-QA. 
    // To create additional environment: right click on 'tests' folder -> create new environment.
    await this.page.goto(process.env.BASE_URL);

    await this.page.getByTestId('input-email').fill(process.env.USERNAME);
    await this.page.getByTestId('input-pass').fill(process.env.PASSWORD);
    await this.page.getByTestId('cta-login').click();

  }
}
