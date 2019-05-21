import os
fileURL = 'F:\\QuanLiWebsiteBanQuanAoOnline\\quanlybanhang\\src\\app\\home'
arr = os.listdir(fileURL)
for obj in arr:
	if os.path.isdir(obj):
		fileLeaf = fileURL+ '\\' +obj
		arrLeaf = os.listdir(fileLeaf)
		for objLeaf in arrLeaf:
			fileLeaf2 = fileLeaf+ '\\' +objLeaf
			arrLeaf2 = os.listdir(fileLeaf2)
			if objLeaf == 'xxx':
				print (fileLeaf2)
			else:
				for objLeaf2 in arrLeaf2:
					list = objLeaf2.split('.')
					if len(list) < 2:
						fileLeaf3 = fileLeaf2+ '\\' +objLeaf2
						arrLeaf3 = os.listdir(fileLeaf3)
						for objLeaf3 in arrLeaf3:
							fileLeaf4 = fileLeaf3+ '\\' +objLeaf3
							arrLeaf4 = os.listdir(fileLeaf3)
							for objLeaf4 in arrLeaf4:
								fileLeaf5 = fileLeaf4+ '\\' +objLeaf4
								arrLeaf5 = os.listdir(fileLeaf4)
								for objLeaf5 in arrLeaf5:
									list1 = objLeaf5.split('-')
									if list1[1] == "xx":
										list1[1] = objLeaf
										try:
											os.rename(objLeaf5,list1[0] + '-' + list1[1] + '-' +list1[2])
										except:
											print (fileLeaf5 + '\\' + objLeaf5)
					if list[0]=="xxx":
						try:
							os.rename(objLeaf2,objLeaf2.replace("xxx",objLeaf))
						except:
							print (fileLeaf2 + '\\' + objLeaf2)
