export interface IBankAccount {
    // Не указываем поля owner и balance так как:
    // В классе они private

    // Создаем public поле walletName
    walletName: string;
    depocit(amount: number): void;
    withDraw(amount:number): void;
}