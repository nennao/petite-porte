class NumberedItem:
    def __init__(self, i, name):
        self.i = i
        self.name = name


def num_skills(skill_list):
    skills_obj = []
    for i in range(len(skill_list)):
        j = i + 1
        k = NumberedItem(j, skill_list[i])
        skills_obj.append(k)
    return skills_obj


my_skills = [
        "html5",         "css3",         "git & github",
        "javascript",    "bootstrap",    "angularjs",
        "python",        "django",       "flask",
        "mysql",         "mongodb",      "database management",
        "d3",            "matplotlib",   "data visualisation",
        "photoshop",     "vectr",        "agile development",
]


