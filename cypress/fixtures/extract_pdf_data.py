import PyPDF2
import sys
import os
import time
pdf_file_path = sys.argv[1]

#pdf_file_path = 'cypress/downloads/batch113586.pdf'

def extract_and_print_pdf_data(pdf_file_path):
  """
  Extracts text data from a PDF file and prints it.

  Args:
      pdf_file_path (str): The path to the PDF file.
  """

  try:
    # Open PDF file in binary read mode
    with open(pdf_file_path, 'rb') as pdf_file:
      # Create a PDF reader object
      pdf_reader = PyPDF2.PdfReader(pdf_file)

      # Iterate through all pages
      print(f"No of Pages : {len(pdf_reader.pages) }")

      for page_num in range(len(pdf_reader.pages)):
        # Get the current page object
        page = pdf_reader.pages[page_num]
      
        # Extract text content from the page
        text_content = page.extract_text()

        # Print the extracted text
        print(f"\nFetching Data from Page {page_num + 1} Text:\n")
        print(text_content.strip())

  except FileNotFoundError:
    print(f"Error: PDF file not found at '{pdf_file_path}'.")
  except Exception as e:
    print(f"An error occurred while processing the PDF: {e}")

#Calling methods 
timeout =  120 # Maximum time to wait for the file (in seconds)


extract_and_print_pdf_data(pdf_file_path)

