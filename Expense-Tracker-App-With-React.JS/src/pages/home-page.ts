import { Page, Locator } from 'playwright';
 
export class HomePage {

   private get header(): Locator {
      return this.page.locator('#root > h2');
   }

   private get descriptionTransaction(): Locator {
      return this.page.locator('#description');
   }

   private get transactionAmount(): Locator {
      return this.page.locator('#transactionamount');
   }

   private get transactionButton(): Locator {
      return this.page.locator('form > button');
   }
   
   private get incomeChangeAreaText(): Locator {
      return this.page.locator('div.inc-exp-container > div:nth-child(1)');
   }

   private get expenseChangeAreaText(): Locator {
      return this.page.locator('div.inc-exp-container > div:nth-child(2)');
   }

   public constructor(private page: Page) {}

   public async goTo(): Promise<void> {
      await this.page.goto('http://expense-tracker-app:3000/');
      await this.header.waitFor();
   }

   public async waitForHeader(): Promise<void> {
   await this.header.waitFor({ state: 'visible' });
   }

   public async enterDescriptionTransaction(description: string): Promise<void> {
      await this.descriptionTransaction.fill(description);
   }

   public async enterTransactionAmount(amount: string): Promise<void> { 
      await this.transactionAmount.fill(amount);
   }

   public async clickAddTransactionButton(): Promise<void> {
      await this.transactionButton.click();
   }

   public async getIncomeChangeAreaText(): Promise<string> {
      return await this.incomeChangeAreaText.innerText();
   }

   public async getExpenseChangeAreaText(): Promise<string> {
      return await this.expenseChangeAreaText.innerText();
   }
}

 

