/// <reference types="cypress" />

export {}

declare global {
  namespace Cypress {
    interface Chainable {
      DoUserLogin(processor: string, password: string): Chainable<void>;
      getData(): Chainable<object>; // Replace with specific type if known
      setData(data: object): Chainable<void>;
      setItem(key: string, value: string): void;
      getItem(key: string): string | null;
      removeItem(key: string): void;
      clear(): void;
      clearBatchDownloads():void;
      Logout():void;
      JSONtoCSV(NoOfRows:number):void;
      deleteFiles(folder:string,filePattern:string):void;
    }
  }
}

