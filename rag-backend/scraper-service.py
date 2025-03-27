from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


def extract_text_with_selenium(url):
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size-1920x1080")

    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)

    driver.get(url)
    driver.implicitly_wait(5)

    text = " ".join(
        [elem.text for elem in driver.find_elements(By.TAG_NAME, "p")])
    text += " ".join([elem.text for elem in driver.find_elements(By.TAG_NAME, "li")])

    driver.quit()
    return text


url = "https://www.colorado.edu/cs/academics/undergraduate-programs/bachelor-arts/bachelor-arts-degree-requirements"
course_text = extract_text_with_selenium(url)
print(course_text)
