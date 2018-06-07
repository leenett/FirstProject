from django.db import models


class Subscriber(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=128)

    def __str__(self):
        return "Польователь %s %s" % (self.name, self.email)

    class Meta:
        verbose_name = 'My_Subscriber'
        verbose_name_plural = "All_Subscribes"
