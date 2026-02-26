import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class CustomerExportService {

  constructor() { }

  exportToCSV(customers: any[], filename: string = 'customers'): void {
    const headers = ['ID', 'Store Code', 'First Name', 'Last Name', 'Email Address'];
    const rows = customers.map(customer => [
      customer.id,
      customer.storeCode,
      customer.firstName,
      customer.lastName,
      customer.emailAddress
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell || ''}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportToPDF(customers: any[], filename: string = 'customers'): void {
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text('Customer List', 14, 20);
    
    const headers = [['ID', 'Store Code', 'First Name', 'Last Name', 'Email Address']];
    const rows = customers.map(customer => [
      customer.id,
      customer.storeCode,
      customer.firstName,
      customer.lastName,
      customer.emailAddress
    ]);

    autoTable(doc, {
      head: headers,
      body: rows,
      startY: 30,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185] }
    });

    doc.save(`${filename}_${new Date().getTime()}.pdf`);
  }
}
