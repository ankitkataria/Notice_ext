from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

driver=webdriver.Chrome()
driver.get("https://channeli.in/#notices/")
time.sleep(5)
#wait=driver.WebDriverWait(driver,10).until(EC.presence_of_elements_located(By.CLASS_NAME,'notice_info'))

notice_infos=driver.find_elements_by_xpath('//div[@class="notice_info"]');

json_arr=[];
json_tmp={};
i=0;
print (notice_infos)
for info in notice_infos:
	temp={}
	notice_date=info.find_elements_by_xpath(".//div[@class='notice_date']")[0]
	notice_source=info.find_elements_by_xpath(".//div[@class='notice_source']")[0]
	notice_subject=info.find_elements_by_xpath(".//div[@class='notice_subject']")[0]
	temp['date']=notice_date.get_attribute('innerHTML')
	temp['source']=notice_source.get_attribute('innerHTML')
	temp['subject']=notice_subject.get_attribute('innerHTML')
	str_i=str(i)
	json_tmp[str_i]=temp;
	i=i+1
	#print (notice_date.get_attribute('innerHTML'))
	#print (notice_source.get_attribute('innerHTML'))
	#print (notice_subject.get_attribute('innerHTML'))

#dump=json.dumps(json_tmp)
#print(dump)

with open("notice.json","w") as outfile:
	json.dumps(json.dump(json_tmp,outfile,indent=4))

driver.quit()

