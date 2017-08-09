# Students and former students

## Current PhD Students

## Current Master Students

## Graduated PhD Students

{% for student in site.data.students.graduated_phd_students %}
    <p> 
        {{ student.name }} <br>
        {% for person in student.cosupervisors %}
            <small>{{ person }}</small>
        {% endfor %}
    </p>
{% endfor %}


## Graduated Master Students
